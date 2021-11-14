import { Link } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../../services/addToCart";
import "./SingleProduct.css";

const SingleProduct = ({ product, filteredProducts, setAddedNotification }) => {
    const [productAmount, setProductAmount] = useState(1);

    const addedNotificationTimer = () => {
        setAddedNotification(true);
        setTimeout(() => {
            setAddedNotification(false);
        }, 5000);
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

                <button
                    className="addToCartButton"
                    onClick={() => {
                        addToCart(product, productAmount, filteredProducts);
                        addedNotificationTimer();
                    }}
                >
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default SingleProduct;
