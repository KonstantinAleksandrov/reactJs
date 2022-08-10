import React from 'react'
import { useState, useEffect, useRef } from 'react'
import {DateTime} from 'luxon'
import Message from './Message'

// let timerId = null

const RenderChat = () => {
    const [messages, setMessages] = useState({ counter: 0, arr: [] })
     const [time, setTime] = useState(DateTime.local())

    const timerId = useRef(null)

    // useEffect(()=>{
    //     timerId = setInterval(() => {
    //         tick()
    //     }, 2000)
    //
    //     return () => {
    //         clearInterval(timerId)
    //     }
    // },[messages.counter])

    useEffect(() => {
        if(timerId.current) {
            clearTimeout(timerId.current)
        }
        tick()
    }, [messages.counter])

    const tick = () => {
        fetch(`http://localhost:7777/messages?from=${messages.counter}`)
        .then(response => response.json())
        .then(result=>{
            console.log(messages)
            if(result[result.length -1] && result[result.length -1].id > messages.counter){
                setMessages({counter:result[result.length -1].id, arr: result})
            }
            timerId.current = setTimeout(tick, 2000)
        })
    }


    useEffect(() => {
        setTimeout(() => setTime(prev => prev.plus(1000)), 1000)
    }, [time])


    return (
        <ul className='listMassages'>
            {messages.arr.map((message) => {
                return (
                    <Message key={message.id} message={message}/>
                )
            })}
            <li>{time.hour}:{time.minute}:{time.second}</li>
        </ul>
    )
}
export default RenderChat