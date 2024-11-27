import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} onDelete={onDeleteItem} onUpdate={onUpdateItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
