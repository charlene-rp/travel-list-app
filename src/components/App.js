import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const initialItems = [
  { id: 1, description: 'Shirt', quantity: 5, packed: false },
  { id: 2, description: 'Pants', quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState('inputOrder'); 
  const [filter, setFilter] = useState('all');

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAllItems() {
    setItems([]);
  }

  function handleSortChange(event) {
    const sortOption = event.target.value;
    setSortBy(sortOption);

    const sortedItems = [...items];
    if (sortOption === 'description') {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortOption === 'packed') {
      sortedItems.sort((a, b) => a.packed - b.packed);
    } else {
      sortedItems.sort((a, b) => a.id - b.id);
    }

    setItems(sortedItems);
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const filteredItems = items.filter(item => {
    if (filter === 'packed') return item.packed;
    if (filter === 'unpacked') return !item.packed;
    return true;
  });

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        items={filteredItems}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={filteredItems} />
      
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="inputOrder">Input Order</option>
          <option value="description">Description</option>
          <option value="packed">Packed Status</option>
        </select>
      </div>
    
      <div>
        <label>Filter:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="packed">Packed</option>
          <option value="unpacked">Unpacked</option>
        </select>
      </div>

      <button onClick={handleClearAllItems} className="clear-button">Clear All</button>
    </div>
  );
}

export default App;
