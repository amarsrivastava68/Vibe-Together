const express=  require('express')
const {chats} = require('./data/data')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const dotenv = require('dotenv')
connectDB()
const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 5000

app.use('/api/user' , userRoutes)
app.listen(PORT , console.log('server is started'));