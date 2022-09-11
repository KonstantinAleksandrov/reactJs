import React, {useCallback} from 'react'
import { useState, useEffect, useRef } from 'react'
import './style.scss'

const Chat = () => {
    let text = useRef() // to state
    const [messages, setMessages] = useState({ counter: 0, arr: [] }) // to Redux
    const timerId = useRef(null)
    let user = useRef(JSON.parse(localStorage.getItem('user'))) // to middlewares
    const ul = useRef()

    useEffect(() => {
        if (timerId.current) {
            clearTimeout(timerId.current)
            ul.current.scrollTop =  ul.current.scrollHeight -  ul.current.offsetHeight
        }
        setTimeout(tick, 1500)
    }, [messages.counter])
    

    const tick = () => { // to thunks
        fetch(`http://127.0.0.1:903/card`)
            .then(response => response.json())
            .then(result => {
                if (result.length > messages.counter) {
                    setMessages({ counter: result.length, arr: result }) // to redux
                }
                timerId.current = setTimeout(tick, 1500)
            })
    }

    const sendMessange = useCallback(() => {
        let myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");

         let raw = JSON.stringify({
            [user.current.key] : {'text' :text.value,'color':user.current.color,'userName' : user.current.name}
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
    }, [text.value, user.current.color, user.current.name, user.current.key])

    return (
        <div className='chat' >
            <ul ref={ul}>
                {messages.arr.map((item) => {
                    return (
                        <li  className={Object.keys(item)[0] === user.current.key? 'myMessange' :'messange'} > {/* как передать индивидуальный color? */}
                            <div className='name'>{Object.values(item)[0].userName}</div>
                            <div className='text' style={{borderColor: Object.values(item)[0].color}}>{Object.values(item)[0].text}</div>
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