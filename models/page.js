var mongoose = require('mongoose');

// define the schema for our user model
var pageSchema = mongoose.Schema({

    content : {
        name:String,
        major:String,
        school:String,
        interests:[String],
        summary: String,
        life: String,
        accomplishments: String,
        references: String
    }

});

module.exports = mongoose.model('Page', pageSchema);