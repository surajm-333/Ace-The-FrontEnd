import React from "react";
import { MdDeleteForever } from "react-icons/md";

function GroceryItem({ item, handleDeleteItem }) {
  return (
    <div className="item">
      <span>{item.name}</span>
      <MdDeleteForever
        className="delete-icon"
        size="1.3em"
        onClick={()=>{handleDeleteItem(item.id, item.name)}}
      />
    </div>
  );
}

export default GroceryItem;
