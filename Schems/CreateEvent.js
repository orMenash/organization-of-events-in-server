const mongoose = require("mongoose");
const Event = mongoose.Schema({
    NameEvent: { type: String, required: true },
    Date: { type: String, required: true },
    photoUser: { type: String },
    Active: { type: Boolean, default: true },
    loc: {type: Object, default: {lat: 32.0864256, lng: 34.8291072}}
})

module.exports = mongoose.model('Events', Event);
