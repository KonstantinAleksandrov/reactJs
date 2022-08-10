import {memo} from 'react'

const Message = ({message}) => {
  return <li className='message'>{message.content}</li>
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.message.content === nextProps.message.content // Компонент Message перерендерится, только если изменится его поле message.content, если изменится какой то другой пропс, то он не перерендерится
}

export default memo(Message, areEqual)