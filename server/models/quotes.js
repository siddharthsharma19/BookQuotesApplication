var mongoose = require("mongoose")
var Schema = mongoose.Schema
var quoteSchema = new Schema({
    quote: {
        type: String,
        require: true,
    },
    bookid: {
        type: String, 
        require: true
    },
    user: {
        type: String,
        require: true,
    }
})

quoteSchema.pre("save", function(next) {
    return next();
}) 

module.exports = mongoose.model("quotes", quoteSchema);