import logo from './logo.svg';
import './App.scss';
import Counter from './Components/Counter'
import Table from './Components/Table'

const tableData = [
  {id: 1, name: "Jonh", age: 22},
  {id: 2, name: "Max", age: 23},
  {id: 3, name: "Steven", age: 12},
  {id: 4, name: "Jess", age: 27},
  {id: 5, name: "Carmen", age: 21},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Counter/>
        <Table list={tableData} title="Table name"/>
      </header>
    </div>
  );
}

export default App;
