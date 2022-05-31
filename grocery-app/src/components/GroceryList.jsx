import React from "react";
import GroceryItem from "./GroceryItem";
import AddItem from "./AddItem";

function GroceryList({ list, handleAddItem, handleDeleteItem }) {
  return (
    <div className="grocery-list">
      {list.map((item) => {
        return (
          <GroceryItem
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
      <AddItem
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default GroceryList;
