import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import GroceryList from "./components/GroceryList";
import Search from "./components/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [groceryList, setGroceryList] = useState(
    JSON.parse(localStorage.getItem("groceryItems")) || []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(groceryList));
  }, [groceryList]);

  const notif = (msg, type) => {
    switch (type) {
      case "sucess":
        toast.success(`${msg}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        break;
      case "error":
        toast.error(`${msg}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        break;
      default:
        toast(`${msg}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        break;
    }
  };

  const addItem = (item) => {
    setGroceryList([
      ...groceryList,
      {
        id: nanoid(),
        name: item,
      },
    ]);
    notif(`${item} Added`, "sucess");
  };
  const deleteItem = (id, name) => {
    const newGroceryList = groceryList.filter((item) => item.id !== id);
    setGroceryList(newGroceryList);
    notif(`${name} Deleted`, "error");
  };
  return (
    <div className="container">
      <ToastContainer/>
      <h1>Grocery Bud</h1>
      <Search handleSearch={setSearchText} />
      <GroceryList
        list={groceryList.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )}
        handleAddItem={addItem}
        handleDeleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
