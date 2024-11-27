// src/components/Item.js
import React from "react";

function Item({ item, onDelete, onUpdate }) {
  const itemStyle = item.packed ? { textDecoration: "line-through" } : {};

  return (
    <div>
      <label style={itemStyle}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onUpdate(item.id)}
          style={{ marginRight: "1rem" }}
        />
        {item.quantity} x {item.description}
      </label>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </div>
  );
}

export default Item;
