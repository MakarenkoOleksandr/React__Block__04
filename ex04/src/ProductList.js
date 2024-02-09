import Product from "./Product";

const ProductList = ({ products, updateQuantity }) => {
  return (
    <div>
      {products.map((el, index) => (
        <Product
          key={el.product}
          img={el.image}
          name={el.product}
          price={el.price}
          count={el.quantity}
          updateQuantity={updateQuantity}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductList;
