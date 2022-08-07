import React from 'react'
import { useState, useEffect } from 'react'

const RenderChat = () => {
    const [messages, setMessages] = useState({ counter: 0, arr: [] })
    useEffect(()=>{
        setTimeout(tick,2000)
    },[])

    /* setInterval(()=>{
     fetch(`http://localhost:7777/messages?from=${messages.id}`)
     .then(response => response.json())
     .then(result => {
         if(result[result.length -1].id > messages.counter){
             setMessages({counter:result[result.length -1].id, arr: result})
         }
         console.log(result[result.length -1].id)
         
     })
    },2000)  */
    const tick =()=>{
        fetch(`http://localhost:7777/messages?from=${messages.counter}`)
        .then(response => response.json())
        .then(result=>{
            if(result[result.length -1].id > messages.counter){
                // почему здесь  messages не поменялся
            }
            setTimeout(tick,2000)
        })
    }

    return (
        <ul className='listMassages'>
            {messages.arr.map((message) => {
                return (
                    <li className='message' key={message.id}>{message.content}</li>
                )
            })}
        </ul>
    )
}
export default RenderChat