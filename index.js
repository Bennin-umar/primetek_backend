const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/connectDB")
const cors =require("cors")

const phonesRoute = require('./routes/phonesRoute')
const usersRoute = require("./routes/usersRoute")



const app = express()
dotenv.config()

//connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes

app.use('/api/v2/phones',phonesRoute);
app.use("/api/v2/users", usersRoute);

//home route
app.get("/", (_req,res)=> {
    res.send("<h1>welcome to our phones api</h1>")
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))