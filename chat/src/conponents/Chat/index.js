import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Chat = () => {
    const [messages, setMessages] = useState({ counter: 0, arr: [] })
    const timerId = useRef(null)

   /*  useEffect(() => {
        if (timerId.current) {
            clearTimeout(timerId.current)
        }
        setTimeout(tick, 2000)
    }, [messages.counter])

    const tick = () => {
        fetch(`http://localhost:7777/messages?from=${messages.counter}`)
            .then(response => response.json())
            .then(result => {
                if (result[result.length - 1] && result[result.length - 1].id > messages.counter) {
                    setMessages({ counter: result[result.length - 1].id, arr: result })
                }
                timerId.current = setTimeout(tick, 2000)
            })
    } */

      return (
        <ul>
            <li> привет андрей</li>
        </ul>
    )

}
export default Chat