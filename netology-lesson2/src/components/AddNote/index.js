import React from 'react'
import { useEffect, useRef } from 'react'
import Arrow from '../AddNote/icon/arrow.png'
import './style.scss'

const AddNote = (props) => {
    let noteCounter = useRef(0)
    let noteText = useRef('')
    let textareaText = useRef('')

    useEffect(() => {
        fetch('http://127.0.0.1:902/catalog')
            .then(response => response.json())
            .then((result) => {
                if (Object.values(result).length) {
                    noteCounter.current = +Object.values(result)[Object.values(result).length - 1].name
                }
            })
    }, [])

    const saveText = (text) => {
        noteText.current = text.value
    }

    const saveNote = () => {
        if (noteText.current) {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
                "name": noteCounter.current + 1,
                'text': noteText.current
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`http://127.0.0.1:902/catalog`, requestOptions)
                .then(response => response.json())
                .then((result) => {
                    props.rendering(Object.values(result))
                    noteCounter.current = +Object.values(result)[Object.values(result).length - 1].name
                    textareaText.value = ''
                    noteText.current = ''
                })
        } else {
            return
        }
    }

    return (
        <div className='newNote'>
            <div className='newNote__title'>New note</div>
            <div className='newNote__body'>
                <textarea onBlur={((e) => { saveText(e.target) ; textareaText = e.target})}></textarea>
                <div className='newNote__btn btn' onClick={(() => saveNote())}>
                    <span className='btn__arrow'>
                        <img src={Arrow} alt='arrow'></img>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default AddNote