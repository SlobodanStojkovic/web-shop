import { useState } from "react/cjs/react.development";
import "./SingleProduct.css";

const SingleProduct = ({ product, productsWithAmount }) => {
    const [productAmount, setProductAmount] = useState(1);
    const [shoppingCart, setShoppingCart] = useState([]);

    const updateProductAmount = () => {
        productsWithAmount.forEach((element) => {
            if (element.id === product.id) {
                let buyingArticle = {
                    ...element,
                    amount: productAmount,
                };

                let shoppingItems = shoppingCart.map((itemToBuy) => {
                    console.log(buyingArticle)
                    return [itemToBuy, buyingArticle];
                });
                setShoppingCart(shoppingItems);
            }
        });
        console.log(shoppingCart);
    };

    return (
        <div className="singleProduct">
            <div className="imageDiv">
                <img
                    className="productImg"
                    src={product.image}
                    alt={product.title}
                ></img>
            </div>
            <p className="productTitle">{product.title}</p>
            <input
                type="number"
                placeholder="1"
                onChange={(event) => setProductAmount(event.target.value)}
                min="0"
                max="10"
            ></input>

            <p>Price: ${(product.price * productAmount).toFixed(2)}</p>
            <p>Rating: {product.rating.rate}</p>
            <button className="addToCartButton" onClick={updateProductAmount}>
                Add to cart
            </button>
        </div>
    );
};

export default SingleProduct;
