import React from 'react'
import AddNote from '../AddNote'
import UpdateNotes from '../UpdateNotes'
import { useState, useEffect } from 'react'
import './style.scss'
const RenderNoteList = () => {
    const [list, setList] = useState(null)
    useEffect(() => {
        fetch('http://127.0.0.1:902/catalog')
            .then(response => response.json())
            .then((result) => {
                setList(Object.values(result))
            })
    }, [])

    const rendering = (data) => {
        setList(data)
        console.log('rendering dune!')
    }

    const delNote = (idNote) => {
        let raw = "";

        let requestOptions = {
            method: 'DELETE',
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://127.0.0.1:902/catalog/${+idNote}`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setList(Object.values(result))
            })
    }
    return (
        <div className='notes'>
            <UpdateNotes rendering={rendering} />
            <ul className='noteList'>
                {list === null ? console.log('tick') : list.map((item) => { // ??????
                    return (
                        <li className='noteList__item' key={item.name}>
                            <div className='item__text'>{item.text}</div>
                            <div className='note__btn btn' onClick={() => { delNote(item.name) }}>
                                <div className='btn__cros'>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <AddNote rendering={rendering} />
        </div>
    )
}
export default RenderNoteList