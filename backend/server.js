const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const Ticket = require('./model/ticketSchema');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch ((err) => console.error(err));


app.post("/tickets", async(req, res) => {
    try{
        const newTicket = new Ticket(req.body);
        await newTicket.save();
        res.status(201).json(newTicket);
    }catch (error){
        res.status(500).json({ error: "Failed to create ticket" });
    }
});

app.get("/tickets", async(req, res) => {
    try{
        const tickets = await Ticket.find();
        res.json(tickets);
    }catch(error){
        res.status(500).json({ error: "Failed to fetch tickets" });
    }
});

app.listen(3001, () => console.log("Server running on port 3001"))