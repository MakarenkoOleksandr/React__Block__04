import { useState } from "react";

const Product = ({ key, img, name, price, count, updateQuantity, index }) => {
  const [quantity, setQuantity] = useState(count);

  const increase = () => {
    setQuantity(quantity + 1);
    updateQuantity(index, quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateQuantity(index, quantity - 1);
    }
  };

  return (
    <div className="card">
      <img className="img" src={img}></img>
      <div>{name}</div>
      <div className="count">
        <button onClick={decrease}>-</button>
        {quantity}
        <button onClick={increase}>+</button>
      </div>
      <div>{quantity > 0 ? quantity * price : 0} $</div>
    </div>
  );
};

export default Product;
