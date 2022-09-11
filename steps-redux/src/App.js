import './common.scss'
import RenderPosts from "./components/RenderPosts";
import Modal from "./components/Modal";
import Form from "./components/Form";
import EditForm from './components/EditForm'
import AddPost from './components/AddPost'

function App() {

  return (
    <div className="App">
      <AddPost/>
      <Modal name="add-form">
        <Form/>
      </Modal>
      <RenderPosts/>
      <Modal name="edit-form">
        <EditForm/>
      </Modal>
    </div>
  );
}

export default App;
