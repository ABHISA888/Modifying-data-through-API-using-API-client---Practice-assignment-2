const mongoose = require('mongoose');

const newMenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
});

const MenuItem= mongoose.model('MenuItem', newMenuSchema);
module.exports = MenuItem;
// mongodb+srv://abhiniveshss76:Abhi888894@cluster0.xpilt.mongodb.net/