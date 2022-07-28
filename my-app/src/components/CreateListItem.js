import {useState, useEffect} from 'react'

let counter = 0


const Image = ({picture}) => {

  useEffect(() => {
    return () => {
      console.log('unmount')
    }
  }, [])

  return <img src={picture} alt='123'/>
}

const CreateListItem = (props) =>{
   let [picture, setPicture] = useState('common')
   let [isActive, setIsActive] = useState(false)

    const change = () => {
      setPicture(prev => prev === 'active' ? 'common' : 'active')
      setIsActive(prev => !prev)
        // if(picture == 'common'){
        //     setPicture('active')
        //     console.log(picture)
        // }else{
        //     setPicture('common')
        //     console.log(picture)
        // }
    }

    useEffect(() => {
      setPicture(prev => prev === 'active' ? 'common' : 'active')
    }, [isActive])

    console.log('rerender number '+ counter++)
    return (
        <div className='item'>

            {picture === 'active' && <span>Active</span>}
            {picture === 'common' && <span>Common</span>}
            {isActive && <div className={picture}>{props.picture.name}</div>}
            {isActive && <div className='image'>
                <Image picture={props.picture.image}/>
            </div>}
          <button onClick={change}>Click</button>
        </div>
    ) 
}
export default CreateListItem;