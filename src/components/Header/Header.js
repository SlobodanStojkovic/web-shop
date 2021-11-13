import "./Header.css";
import shoppingCart from "./assets/shoppingCart.png";
import { useState } from "react/cjs/react.development";
import Cart from "../Cart/Cart";

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [productsInCart, setProductsInCart] = useState([]);

    const cartShowHandler = () => {
        setShowCart(() => !showCart);
    };

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

                <button
                    className="shoppingCardButton"
                    onClick={cartShowHandler}
                >
                    <img
                        className="shoppingCartImage"
                        alt="shopping"
                        src={shoppingCart}
                    ></img>
                    {productsInCart !== null ? productsInCart.length : 0}
                </button>
            </header>
            <Cart
                showCart={showCart}
                cartShowHandler={cartShowHandler}
                productsInCart={productsInCart}
                setProductsInCart={setProductsInCart}
            />
        </>
    );
};

export default Header;
