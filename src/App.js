import logo from './logo.svg'
import './App.css'

const itmes = [
  {
    id: 1,
    title: 'Learning JavaScript',
    price: '',
    date: '2022-01-10',
    category: {
      id: '1',
      title: 'learning',
      type: 'income'
    }
  },
  {
    id: 2,
    title: 'Learning React',
    price: '',
    date: '2022-01-10',
    category: {
      id: '1',
      title: 'learning',
      type: 'income'
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
