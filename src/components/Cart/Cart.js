import { useEffect, useState } from "react/cjs/react.development";
import "./Cart.css";

const Cart = ({
    showCart,
    cartShowHandler,
    productsInCart,
    setProductsInCart,
}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotal = () => {
        let total = 0;
        productsInCart.forEach((element) => {
            console.log(productsInCart)
            if (element.amount !== 0) {
                total += element.price * element.amount;
            }
        });
        return setTotalPrice(total);
    };

    useEffect(() => {
        setProductsInCart(() =>
            JSON.parse(localStorage.getItem("webShopSloba"))
        );
    }, [showCart]);

    const clearCart = () => {
        localStorage.removeItem("webShopSloba");
        setProductsInCart([]);
    };

    return showCart && productsInCart !== null ? (
        <div className="cartContainer">
            <h1>My cart</h1>
            <button className="closeCartButton" onClick={cartShowHandler}>
                X
            </button>
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
                                    min="0"
                                    max="10"
                                ></input>

                                <p>
                                    Price: $
                                    {(product.price * product.amount).toFixed(
                                        2
                                    )}
                                </p>
                                <p>Rating: {product.rating.rate}</p>
                            </div>
                        );
                    })}
            </div>
            <button>Calculate total</button>
            <h2 onClick={calculateTotal}>Total: {totalPrice} </h2>
            <button className="clearCartButton" onClick={clearCart}>
                Clear Cart
            </button>
        </div>
    ) : null;
};

export default Cart;
