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

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
