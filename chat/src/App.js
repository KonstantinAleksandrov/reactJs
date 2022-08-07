import { nanoid } from 'nanoid'
import './common.scss'
import RenderChat from './conponents/RenderChat'

function App() {
  console.log(nanoid())
  return (
    <div className="App">
      <RenderChat/>
    </div>
  );
}

export default App;
