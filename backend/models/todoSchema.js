const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        immutable: true
    },
    description: {
        type: String,
        required: false
    },
    number: {
        type: String,
        required: true,
        unique: true
    }
    
});
module.exports = mongoose.model("ToDo", todoSchema);