import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {
    const [chats , setchats ] = useState([])
    const fetchChats = async ()=>{
        const {data} = await axios.get('/api/chat')
        console.log(data)
        setchats(data)
    }
    useEffect(()=>{
         fetchChats()
    } , [])
  return (
    <div>
      {chats.map((chat)=> (
        <p key={chat._id}>{chat.chatName}</p>
      ))}
    </div>
  )
}

export default ChatPage
