const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const Ticket = require('./model/ticketSchema');
const User = require('./model/userSchema');
const authMiddleWare = require('./middleware/auth')

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch ((err) => console.error(err));


app.post("/tickets", authMiddleWare, async(req, res) => {
    try{
        const newTicket = new Ticket({...req.body, userId: req.user.userId});
        await newTicket.save();
        res.status(201).json(newTicket);
    }catch (error){
        res.status(500).json({ error: "Failed to create ticket" });
    }
});

app.get("/tickets", authMiddleWare, async(req, res) => {
    try{
        const tickets = await Ticket.find({userId: req.user.userId});
        res.json(tickets);
    }catch(error){
        res.status(500).json({ error: "Failed to fetch tickets" });
    }
});

app.put("/tickets/:id", authMiddleWare, async (req, res) => {
    try {
        const ticketId = req.params.id;
        const { status, description } = req.body; // Assuming you want to update status and description

        // Find and update the ticket
        const updatedTicket = await Ticket.findOneAndUpdate(
            { _id: ticketId, userId: req.user.userId }, // Ensure only the user can update their own tickets
            { status, description },
            { new: true } // Return the updated ticket
        );

        if (!updatedTicket) {
            return res.status(404).json({ error: "Ticket not found" });
        }

        res.json(updatedTicket);
    } catch (error) {
        res.status(500).json({ error: "Failed to update ticket" });
    }
});

app.delete("/tickets/:id", authMiddleWare, async (req, res) => {
    try {
        const ticketId = req.params.id;
        
        const deletedTicket = await Ticket.findOneAndDelete({
            _id: ticketId, 
            userId: req.user.userId
        });

        if (!deletedTicket) {
            return res.status(404).json({ error: "Ticket not found" });
        }

        res.json({ message: "Ticket deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete ticket" });
    }
});

app.post("/tickets/:id/comments", authMiddleWare, async (req, res) => {
    try {
        const ticketId = req.params.id;
        const { comment } = req.body;

        const newComment = {
            userId: req.user.userId,
            comment
        };

        const ticket = await Ticket.findByIdAndUpdate(
            ticketId,
            { $push: { comments: newComment } },
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({ error: "Ticket not found" });
        }

        res.json(ticket);
    } catch (error) {
        res.status(500).json({ error: "Failed to add comment" });
    }
});

app.post("/register", async(req, res) => {
    try{
        const { username, email, password } = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({ error: 'User exists' });
        }
        const hashPwd = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashPwd });
        await newUser.save();

        res.status(201).json({ message: 'Registered successfully' });
    }catch(error){
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/login', async(req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({error: 'Invalide email'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({ token, userId: user._id, username: user.username });
    }catch(error){
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(3001, () => console.log("Server running on port 3001"))