const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //trim off whitepsace
        minlength: 3
    },
}, {
    timestamps: true //ato create timestaps for when created
});

const User = mongoose.model('User', userSchema);

module.exports = User;