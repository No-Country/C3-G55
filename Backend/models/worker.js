const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workerSchema = new  Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Worker", workerSchema)