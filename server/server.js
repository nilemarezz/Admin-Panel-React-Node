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

const AuthRoute = require('./route/Auth/AuthAdminRoute')
app.use("/auth/admin", AuthRoute);
const Customerroute = require('./route/Items/Customers')
app.use("/Customer", Customerroute);
const Foodroute = require('./route/Items/Foods')
app.use("/Food", Foodroute);


const PORT = 5000;
app.listen(PORT,()=>console.log(`server is start at port ${PORT}`))

