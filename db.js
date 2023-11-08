const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://narasimhamelanta:1234@cluster0.esovmfm.mongodb.net/?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
)
.then((response) => {
    console.log("Connected to Database");
})
.catch((error) => {
    console.log(error);

});
