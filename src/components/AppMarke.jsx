import React, { useEffect, useState } from "react";
import Header from "./header/Header";

import CardBody from "./cards/CardBody";
import Button from "./button/Button";

import "./AppMarke.css";
const AppMarkePlace = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);

  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }
  return (
    <div>
      {/* <Header /> */}

      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
          
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

      
        <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
};

export default AppMarkePlace;
