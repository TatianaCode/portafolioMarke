import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ product, addItem, addedItems }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const item = addedItems.find((addedItem) => addedItem.id === product.id);
    if (item) {
      setQuantity(item.quantity);
    } else {
      setQuantity(0);
    }
  }, [addedItems, product]);

  return (
    <div className="card">
      <img className="card__img" src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-price-add">
        <span>Price : ${product.price}</span>
        <button
          className="add-item-btn"
          onClick={() => {
            addItem(product);
            setQuantity(quantity + 1);
          }}
        >
          ADD
        </button>
        <span>Quantity: {quantity}</span>
      </div>
    </div>
  );
};

export default Card;
