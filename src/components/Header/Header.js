import "./Header.css";
import shoppingCart from "./assets/shoppingCart.png";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Header = ({ productsInCart, setProductsInCart }) => {
    const [showCart, setShowCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setProductsInCart(() =>
            JSON.parse(localStorage.getItem("webShopSloba"))
        );
    }, []);

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
