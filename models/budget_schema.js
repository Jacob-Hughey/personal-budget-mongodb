const { Int32 } = require("bson")
const mongoose = require("mongoose")

const colorValidator = (x) => (/^#([0-9a-f]{6})$/i).test(x);

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    related_value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        validator: [colorValidator, 'Invalid color'],
        required: true
    }
}, { collection: 'budget' })

module.exports = mongoose.model('budget', budgetSchema)