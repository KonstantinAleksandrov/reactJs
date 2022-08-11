
import './common.scss'
import { Routes, Route, Link, NavLink } from "react-router-dom";

import Chat from './conponents/RenderChat'
import FormEnter from './conponents/FormEnter'
import FormReg from './conponents/FormReg'

function App() {

  return (
    <div className="App">
      <header>My application
        {/*<div><a href="/chat">chat</a> <a href="/form-enter">form</a></div>*/}
        {/*<div><Link to="/chat">chat</Link> <Link to="/form-enter">form</Link></div>*/}
        {/*<div>*/}
        {/*  <NavLink to="/chat" style={({isActive}) => isActive ? {textDecoration: "underline"} : undefined}>chat</NavLink>*/}
        {/*  <NavLink to="/form-enter" style={({isActive}) => isActive ? {textDecoration: "underline"} : undefined}>form</NavLink>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <NavLink to="/chat" className={({isActive}) => isActive ? 'active-link' : undefined}>chat</NavLink>*/}
        {/*  <NavLink to="/form-enter" className={({isActive}) => isActive ? 'active-link' : undefined}>form</NavLink>*/}
        {/*</div>*/}
      </header>

      <Routes>
        <Route path="/form-enter" element={<FormEnter/>}/>
        <Route path="/form-reg" element={<FormReg/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
