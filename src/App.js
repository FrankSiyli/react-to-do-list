import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      {/* header */}
      <h1>Todo List App</h1>
      <input
        type="text"
        placeholder="Add item..."
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button onClick={() => addItem()}>add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button onClick={() => deleteItem(item.id)}>💥</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
