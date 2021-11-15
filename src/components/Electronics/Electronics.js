import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../services/addToCart";
import fetchElectronics from "../../services/fetchElectronics";
import "./Electronics.css";

const Electronics = ({
    productAmount,
    setProductAmount,
    addedNotificationTimer,
}) => {
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
        fetchElectronics().then((products) => {
            setElectronics(products);
        });
    }, []);
    

    return (
        <div className="products">
            {electronics.map((product) => {
                return (
                    <div className="singleProduct" key={product.id}>
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

                        <p>
                            Price: ${(product.price * productAmount).toFixed(2)}
                        </p>
                        <p>Rating: {product.rating.rate}</p>

                        <button
                            className="addToCartButton"
                            onClick={() => {
                                addToCart(product, productAmount, electronics);
                                addedNotificationTimer();
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Electronics;
