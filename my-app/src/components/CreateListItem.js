import {useState} from 'react'

const CreateListItem = (props) =>{
   let [picture,setPicture] = useState('common') 
 
    const change = () =>{
        if(picture == 'common'){
            setPicture('active')
            console.log(picture)
        }else{
            setPicture('common')
            console.log(picture)
        }
    }
    return (
        <div className='item'>
            <div className={picture}>{props.picture.name}</div>
            <div className='image' onClick={()=>change()}>
                <img src={props.picture.image} alt='123'/>
            </div>
        </div>
    ) 
}
export default CreateListItem;