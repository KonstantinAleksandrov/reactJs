
import './common.scss'
import Chat from './conponents/Chat'
import FormEnter from './conponents/FormEnter'
import FormReg from './conponents/FormReg'
import { useState } from 'react';

function App() {
  const[goChat,setGoChat]=useState({uniqueKey:'',color:'',start: false})
  return (
    <div className="App">
        {!goChat.start?<FormEnter renderChat={setGoChat}/>:<Chat userInformation={{key:goChat.uniqueKey,color:goChat.color}}/>}
        {/* <Chat/> */}
    </div>
  );
}

export default App;
