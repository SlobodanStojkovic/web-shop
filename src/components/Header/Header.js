import "./Header.css";
import shoppingCart from "./assets/shoppingCart.png";
import { useState } from "react/cjs/react.development";
import Cart from "../Cart/Cart";

const Header = ({ cartProducts }) => {
    const [showCart, setShowCart] = useState(false);

    const cartShowHandler = () => {
        setShowCart(() => !showCart);
    };

    return (
        <header>
            <a className="homeLink" href="./">
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
            <Cart />
            <button className="shoppingCardButton" onClick={setShowCart}>
                <img
                    className="shoppingCartImage"
                    alt="shopping"
                    src={shoppingCart}
                ></img>
                {/* {cartProducts.length} */}
            </button>
        </header>
    );
};

export default Header;
