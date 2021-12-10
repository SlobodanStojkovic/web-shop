import { useEffect } from "react";
import "./Cart.css";

const Cart = ({
  showCart,
  cartShowHandler,
  productsInCart,
  setProductsInCart,
  totalPrice,
  calculateTotal,
}) => {
  const deleteCartProduct = (id) => {
    let delProd = productsInCart.filter((element) => {
      return element.id !== id;
    });
    setProductsInCart(delProd);
    localStorage.setItem("webShopSloba", JSON.stringify(delProd));
    calculateTotal();
  };

  useEffect(() => {
    setProductsInCart(() => JSON.parse(localStorage.getItem("webShopSloba")));
  }, []);

  useEffect(() => {
    if (showCart === true) {
      setProductsInCart(() => JSON.parse(localStorage.getItem("webShopSloba")));
    }
  }, [showCart]);

  useEffect(() => {
    calculateTotal();
  }, [productsInCart]);

  const clearCart = () => {
    localStorage.removeItem("webShopSloba");
    setProductsInCart([]);
    calculateTotal();
  };

  return (
    showCart &&
    productsInCart !== null && (
      <div className="cartContainer">
        <button className="closeCartButton" onClick={cartShowHandler}>
          X
        </button>
        <h1>My cart</h1>

        <div className="productsInCart">
          {productsInCart &&
            productsInCart.map((product, index) => {
              return (
                <div
                  className="singleCartProduct"
                  key={product.id + 100 * index}
                >
                  <img src={product.image} alt="product"></img>
                  <p className="productTitle">{product.title}</p>
                  <input
                    type="number"
                    defaultValue={product.amount}
                    onChange={(event) => {
                      product.amount = event.target.value;
                      calculateTotal();
                    }}
                    min="0"
                    max="10"
                  ></input>

                  <p>Price: ${(product.price * product.amount).toFixed(2)}</p>
                  <p>Rating: {product.rating.rate}</p>
                  <button
                    className="deleteCartProduct"
                    onClick={() => deleteCartProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
        <h2>Total: ${totalPrice.toFixed(2)} </h2>
        <button onClick={calculateTotal} className="calculateTotalInCartButton">
          Calculate
        </button>
        <button className="clearCartButton" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    )
  );
};

export default Cart;
