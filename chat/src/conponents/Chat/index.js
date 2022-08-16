import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './style.scss'

const Chat = (props) => {
    let text = useRef()
    const [messages, setMessages] = useState({ counter: 0, arr: [] })
    const timerId = useRef(null)
    useEffect(() => {
        if (timerId.current) {
            clearTimeout(timerId.current)
        }
        setTimeout(tick, 1500)
    }, [messages.counter])

    const tick = () => {
        fetch(`http://127.0.0.1:903/card`)
            .then(response => response.json())
            .then(result => {
                if (result.length > messages.counter) {
                    setMessages({ counter: result.length, arr: result })
                }
                timerId.current = setTimeout(tick, 1500)
            })
    }

    const sendMessange =()=>{
        let myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");

         let raw = JSON.stringify({
            [props.userInformation.key] : {'text' :text.value,'color':props.userInformation.color}
        });
         let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
          }

        fetch('http://127.0.0.1:903/card',requestOptions)
        .then(()=>{
            text.value = ''
        })
    }
    return (
        <div className='chat'>
            <ul>
                {messages.arr.map((item) => {
                    return (
                        <li className={Object.keys(item)[0] === props.userInformation.key? 'myMessange' :'messange'} >
                            <div className='text'>{Object.values(item)[0].text}</div>
                        </li>
                    )
                })}
            </ul>
            <div className='createMessange'>
                <textarea onBlur={(e)=>text = e.target}></textarea>
                <div className='btn push'onClick={()=>sendMessange()} >Отправить</div>
            </div>
        </div>
    )

}
export default Chat