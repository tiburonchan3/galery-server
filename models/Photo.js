const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	photo: String,
})

module.exports = mongoose.model("Photo", schema)