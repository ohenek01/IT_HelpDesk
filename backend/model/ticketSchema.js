const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {type: String, enum: ["Open", "In Progress", "Closed"], default: "Open"},
    createdAt: { type: Date, default: Date.now },
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;