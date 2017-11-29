const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    phone: {
        type: [Number],
        required: [true, 'Phone is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    question: {
        type: String,
        required: false
    }
});


const Email = mongoose.model('email', EmailSchema);

module.exports = Email;