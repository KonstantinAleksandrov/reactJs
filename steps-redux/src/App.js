import './common.scss'
import RenderPosts from "./components/RenderPosts";
import Modal from "./components/Modal";
import Form from "./components/Form";

function App() {

  return (
    <div className="App">
      <Form/>
      <RenderPosts/>
      <Modal/>
    </div>
  );
}

export default App;
