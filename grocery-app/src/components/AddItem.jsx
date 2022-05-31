import React, { useState } from "react";

function AddItem({ handleAddItem }) {
  const [itemName, setItemName] = useState("");
  const handleChange = (e) => {
    setItemName(e.target.value)
  };
  const handleSaveBtn = ()=>{
    if(itemName.trim().length > 0){
      handleAddItem(itemName)
      setItemName('')
    }
  }
  return (
    <div className="item new">
      <input
        type='text'
        placeholder="Enter item name"
        value={itemName}
        onChange={handleChange}
      />
      <button className="save" onClick={handleSaveBtn}>Add</button>
    </div>
  );
}

export default AddItem;
