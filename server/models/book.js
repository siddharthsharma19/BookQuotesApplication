var mongoose = require("mongoose")
var Schema = mongoose.Schema
var bookSchema = new Schema({
    bookName: {
        type: String, 
        require: true
    },
    author: {
        type: String,
        require: true,
    },
    user: {
        type: String,
        require: true,
    }
})

bookSchema.pre("save", function(next) {
    var book = this;
    return next();
}) 

module.exports = mongoose.model("books", bookSchema);