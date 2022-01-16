import PriceList from './components/PriceList'
import './App.css'

const items = [
  {
    id: 1,
    title: 'Learning JavaScript',
    price: '400',
    date: '2022-01-10',
    category: {
      id: '1',
      name: 'learning',
      type: 'income'
    }
  },
  {
    id: 2,
    title: 'Learning React',
    price: '100',
    date: '2022-01-10',
    category: {
      id: '1',
      name: 'learning',
      type: 'outcome'
    }
  }
]

const handleModifyItem = item => {
  console.log(item)
}

const handleDeleteItem = item => {
  console.log(item)
}

function App() {
  return (
    <div className="App">
      <PriceList items={items} onModifyItem={handleModifyItem} onDeleteItem={handleDeleteItem} />
    </div>
  )
}

export default App
