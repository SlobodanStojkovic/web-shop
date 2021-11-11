import { Link } from "react-router-dom";
import "./SingleProductPage.css";

const SingleProductPage = () => {
    return (
        <div className="singleProduct">
            {/* <div className="imageDiv">
                <img
                    className="productImg"
                    src={product.image}
                    alt={product.title}
                ></img>
            </div>

            <p className="productTitle">{product.title}</p>
            <input
                type="number"
                defaultValue="1"
                onChange={(event) => setProductAmount(() => event.target.value)}
                min="0"
                max="10"
            ></input>

            <p>Price: ${(product.price * productAmount).toFixed(2)}</p>
            <p>Rating: {product.rating.rate}</p>

            <button className="addToCartButton" onClick={addToCart}>
                Add to cart
            </button> */}
        </div>
    );
};

export default SingleProductPage;
