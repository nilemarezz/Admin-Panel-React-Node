const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const dotevn = require("dotenv");
const bodyParser = require('body-parser')
dotevn.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("Connect to Database"));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const LoginRoute = require('./route/Auth/AuthRoute')
app.use("/auth", LoginRoute);
const ItemRoute = require('./route/Items/userItem')
app.use("/Items", ItemRoute);


const PORT = 5000;
app.listen(PORT,()=>console.log(`server is start at port ${PORT}`))

