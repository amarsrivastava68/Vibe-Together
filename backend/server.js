const express=  require('express')
const {chats} = require('./data/data')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5000
app.listen(PORT , console.log('server is started  '));
app.get('/' , (req, res)=>{
    res.send('hello this is main api running ')
})
app.get('/api/chat' , (req , res)=>{
    res.send(chats)

})
app.get('/api/chat/:id' , (req , res)=>{
   const chat = chats.find(c=> c._id === req.params.id)
   res.send(chat)
})