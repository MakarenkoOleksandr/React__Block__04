import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      product: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
      quantity: 1,
    },
    {
      product: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
      quantity: 1,
    },
    {
      product: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
      quantity: 1,
    },
  ]);
  const [message, newMessage] = useState("");

  const updateQuantity = (index, newQuantity) => {
    const updateProduct = [...products];
    updateProduct[index].quantity = newQuantity;
    setProducts(updateProduct);
  };

  const totalCost = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  useEffect(() => {
    if (totalCost() > 500) {
      newMessage({ text: "Free Shipping", color: "green" });
    } else {
      newMessage({ text: "Shipping will be charged", color: "red" });
    }
  }, [products]);

  return (
    <div className="App">
      <h1>Cart</h1>
      <div>Total: {totalCost()} $</div>
      {message && <div style={{ color: message.color }}>{message.text}</div>}
      <ProductList products={products} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
