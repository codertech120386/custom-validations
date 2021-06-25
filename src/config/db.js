const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://dhaval:secret@123@cluster0.kh13m.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

module.exports = connect;