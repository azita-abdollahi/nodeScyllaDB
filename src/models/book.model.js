const models = require('../utils/scyllaDBConnect/index');

var bookModel = models.loadSchema('books', {
    fields:{
        id: {
            type: "uuid",
            default: {"$db_function": "uuid()"},
        },
        author: {
            type: "text",
        },
        title: {
            type: "text",
        },
        description: {
            type: "text"
        },
        publishDate: {
            type: "timestamp"
        },
        created: {
            type: "timestamp",
            default: {"$db_function": "toTimestamp(now())"}
        },
        edition: {
            type: "int"
        }
    },  
    key:["id"],
});

console.log(models.instance.books === bookModel);
bookModel.syncDB(function(err, result) {
    if (err) throw err;
});
module.exports = bookModel;
