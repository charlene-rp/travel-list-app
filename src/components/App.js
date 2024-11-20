import { useState } from "react";

// Initial packing items (you can modify this as needed)
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ setItems }) {
  const [description, setDescription] = useState(""); 
  const [quantity, setQuantity] = useState(1); 

  // Handle adding a new item to the state
  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]); 
  }

  function handleSubmit(e) {
    e.preventDefault(); 

    const newItem = {
      id: Date.now(), 
      description: description, 
      quantity: quantity, 
      packed: false, 
    };

    handleAddItem(newItem);

    setDescription(""); 
    setQuantity(1); 
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <div>
        <label>
          Quantity:
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
      </div>
      <div>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

function Item({ item }) {
  const itemStyle = item.packed ? { textDecoration: "line-through" } : {}; 
  return (
    <div>
      <p style={itemStyle}>
        {item.quantity} x {item.description}
      </p>
    </div>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState(initialItems); 

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} /> 
      <Stats />
    </div>
  );
}

export default App;
