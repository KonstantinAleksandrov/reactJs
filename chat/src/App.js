
import './common.scss'
import Chat from './conponents/Chat'
import FormEnter from './conponents/FormEnter'
import FormReg from './conponents/FormReg'
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import Modal from './conponents/Modal'

function App() {
  const [goChat, setGoChat] = useState({uniqueKey:'',color:'',start: false}) // TODO: to redux
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<FormEnter setIsOpen={setIsOpen}/>}/>
        <Route path="/chat" element={<Chat userInformation={{key:goChat.uniqueKey,color:goChat.color}}/>}/>
        {/*<Route path="/sign-up" element={<FormReg/>}/>*/}
      </Routes>
      {isOpen && <Modal setIsOpen={setIsOpen}><FormReg setIsOpen={setIsOpen}/></Modal>}
        {/*{!goChat.start?<FormEnter/>:<Chat userInformation={{key:goChat.uniqueKey,color:goChat.color}}/>}*/}
        {/*/!* <Chat/> *!/*/}
    </div>
  );
}

export default App;
