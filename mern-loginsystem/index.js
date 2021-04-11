const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()

const app = express();
app.use(express.json())
app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(PORT));
app.get("/", (req, res) => {
    res.send("hello world");
});


mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
        if(err) throw err;
        console.log("Mongodb established");
    }
);


app.use("/users", require("./routes/userRouter"));
//BtPGaNFs8Y3Mpf3q
//mongodb+srv://ernesto:<password>@main.yotdb.mongodb.net/<dbname>?retryWrites=true&w=majoritymongo