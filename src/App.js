import { useState } from 'react';
import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';
import { LIST_VIEW, TYPE_INCOME, TYPE_OUTCOME } from './utility';
import './App.css';

const items = [
  {
    id: 1,
    title: 'Learning JavaScript',
    price: '400',
    date: '2022-01-10',
    category: {
      id: '1',
      name: 'learning',
      type: TYPE_INCOME
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
      type: TYPE_OUTCOME
    }
  }
];

function App() {
  const [activeTab, setActiveTab] = useState(LIST_VIEW);

  const handleModifyItem = item => {
    console.log(item);
  };

  const handleDeleteItem = item => {
    console.log(item);
  };

  const handleTabChange = (e, name) => {
    e.preventDefault();
    setActiveTab(name);
  };

  return (
    <div className="App">
      <PriceList
        items={items}
        onModifyItem={handleModifyItem}
        onDeleteItem={handleDeleteItem}
      />
      <ViewTab activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}

export default App;
