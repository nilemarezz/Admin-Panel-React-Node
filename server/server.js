const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const dotevn = require("dotenv");
const bodyParser = require('body-parser')
const Admin = require('./models/AdminUser')
dotevn.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
//Docker Connect
//mongoose.connect("mongodb://mongo:27017/backoffice_test", { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("Connect to Database"));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use("/uploads",express.static('uploads'));

// const seedAdmin = async ()=>{
    
//     await Admin.create({user:"admin",password:"password",name:"Master1",department:"CEO"})
// }
// seedAdmin();

const AuthRoute = require('./route/AuthAdmin/AuthAdminRoute')
app.use("/auth/admin", AuthRoute);
const ItemAdminRoute = require('./route/ItemsRoute/ItemRoute')
app.use("/Item", ItemAdminRoute);



const PORT = 5000;
app.listen(PORT,()=>console.log(`server is start at port ${PORT}`))

