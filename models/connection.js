var mongoose = require('mongoose');


var options = {
     connectTimeoutMS: 5000,
     useNewUrlParser: true,
     useUnifiedTopology : true
    }
    mongoose.connect(' mongodb+srv://Neera:azerty12@cluster0.almkw.mongodb.net/morningnews?retryWrites=true&w=majority', 
    options,        
     function(err) {
       console.log(err);
     }
    );

    module.exports = mongoose