import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import {getUser, sendMessange, tick} from '../../store/ChatReducer';
import {useAutoScroll} from "./useAutoScroll";

const Chat = () => {
    const dispatch = useDispatch()
    const chatReducer = useSelector((state) => state.chatReducer)
    const { messages, user } = chatReducer
    const [textMessage, setTextMessage] = useState('')

    const [ul] = useAutoScroll(tick)

    useEffect(() => {
        dispatch(getUser(JSON.parse(localStorage.getItem('user'))))
    }, [])

    return (
        <div className='chat' >
            <ul ref={ul}>
                {messages?.map((item) => {
                    return (
                        <li className={Object.keys(item)[0] === user.key ? 'myMessange' : 'messange'} >
                            <div className='name'>{Object.values(item)[0].userName}</div>
                            <div className='text' style={{ borderColor: Object.values(item)[0].color }}>{Object.values(item)[0].text}</div>
                        </li>
                    )
                })}
            </ul>
            <div className='createMessange'>
                <textarea
                    value={textMessage}
                    onChange={(e) => { setTextMessage(e.target.value) }}
                >
                </textarea>
                <div className='btn push' onClick={() => { dispatch(sendMessange(textMessage)); setTextMessage('') }} >Отправить</div>
            </div>
        </div>
    )

}
export default Chat