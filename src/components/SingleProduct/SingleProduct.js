import { Link } from "react-router-dom";
import { useState } from "react";
import "./SingleProduct.css";

const SingleProduct = ({ products, product, setAddedNotification }) => {
    const [productAmount, setProductAmount] = useState(1);

    const addToCart = () => {
        let cartItemsForLocalStorage =
            JSON.parse(localStorage.getItem("webShopSloba")) || [];

        products.forEach((element) => {
            if (element.id === product.id) {
                cartItemsForLocalStorage.push({
                    ...product,
                    amount: productAmount,
                });

                localStorage.setItem(
                    "webShopSloba",
                    JSON.stringify(cartItemsForLocalStorage)
                );
            }
        });
        setAddedNotification(true);
    };

    return (
        <>
            <div className="singleProduct">
                <Link to={`/single-product/${product.id}`}>
                    <div className="imageDiv">
                        <img
                            className="productImg"
                            src={product.image}
                            alt={product.title}
                        ></img>
                    </div>

                    <p className="productTitle">{product.title}</p>
                </Link>
                <input
                    type="number"
                    defaultValue="1"
                    onChange={(event) =>
                        setProductAmount(() => event.target.value)
                    }
                    min="0"
                    max="10"
                ></input>

                <p>Price: ${(product.price * productAmount).toFixed(2)}</p>
                <p>Rating: {product.rating.rate}</p>

                <button className="addToCartButton" onClick={addToCart}>
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default SingleProduct;
