var mongoose = require('mongoose');


var pageSchema = mongoose.Schema({

    info : {
        name : String,
        major : String,
        school : String,
        interests : [{type:String}],
        summary : String,
        life : String,
        accomplishments: String,
        references: String
    }

});