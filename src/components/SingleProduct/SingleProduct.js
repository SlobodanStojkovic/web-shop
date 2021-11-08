import { useState } from "react/cjs/react.development";
import "./SingleProduct.css";

const SingleProduct = ({ products, product }) => {
    const [productAmount, setProductAmount] = useState(1);
    const [shoppingCartItem, setShoppingCartItem] = useState({});


    const addToCart = () => {
        let cartItemsForLocalStorage =
            JSON.parse(localStorage.getItem("webShopSloba")) || [];

        products.forEach((element) => {
            if (element.id === product.id) {
                let buyingArticle = {
                    ...element,
                    amount: productAmount,
                };
                setShoppingCartItem(buyingArticle);

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
                defaultValue="1"
                onChange={(event) => setProductAmount(() => event.target.value)}
                min="0"
                max="10"
            ></input>

            <p>Price: ${(product.price * productAmount).toFixed(2)}</p>
            <p>Rating: {product.rating.rate}</p>

            <button className="addToCartButton" onClick={addToCart}>
                Add to cart
            </button>
        </div>
    );
};

export default SingleProduct;
