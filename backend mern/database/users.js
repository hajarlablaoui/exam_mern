const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String },
    gender: { type:String},
    dob:{type:Date},
    news:{type:String},
    email:{type:String},
    photo:{type:String},
}, {
    timestamps: true,
})

module.exports = mongoose.model("User", UserSchema)