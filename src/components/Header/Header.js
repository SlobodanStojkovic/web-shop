import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { CartIcon } from "./CartIcon";
import "./Header.css";

const Header = ({ productsInCart, setProductsInCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalNumberOfProductsInCart, setTotalNumberOfProductsInCart] =
    useState(0);

  useEffect(() => {
    setProductsInCart(() => JSON.parse(localStorage.getItem("webShopSloba")));
  }, []);

  useEffect(() => {
    let total = 0;
    if (productsInCart) {
      productsInCart.forEach((product) => {
        total += product.amount;
      });
    }
    setTotalNumberOfProductsInCart(total);
  }, [productsInCart]);

  const calculateTotal = () => {
    let total = 0;
    productsInCart &&
      productsInCart.forEach((element) => {
        if (element.amount !== 0) {
          total += element.price * element.amount;
        }
      });
    return setTotalPrice(total);
  };

  const cartShowHandler = () => {
    setShowCart(() => !showCart);
    calculateTotal();
  };

  //to prevent background scroll when modal is open
  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [showCart]);

  return (
    <>
      <header>
        <a className="homeLink" href="../home">
          Home
        </a>
        <ul>
          <li>
            <a href="./electronics">Electronics</a>
          </li>
          <li>
            <a href="./mens-clothing">Men's clothing</a>
          </li>
          <li>
            <a href="./womens-clothing">Women's clothing</a>
          </li>
          <li>
            <a href="./jewelery">Jewelery</a>
          </li>
        </ul>

        <button className="shoppingCartButton" onClick={cartShowHandler}>
          <CartIcon />
          {totalNumberOfProductsInCart ? totalNumberOfProductsInCart : 0}
        </button>
      </header>
      <Cart
        showCart={showCart}
        totalPrice={totalPrice}
        calculateTotal={calculateTotal}
        cartShowHandler={cartShowHandler}
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />
    </>
  );
};

export default Header;
