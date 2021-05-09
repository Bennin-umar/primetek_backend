const mongoose = require("mongoose")

const phoneSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    max_speed: {
        type: String,
        required: true
    }

}, {
    asw: true,
});


const Customer = mongoose.model("Phone", phoneSchema)
module.exports = Customer;
