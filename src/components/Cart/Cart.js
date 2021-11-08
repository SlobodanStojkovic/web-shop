import "./Cart.css";

const Cart = ({ setShowCart }) => {
    let productsInCart = JSON.parse(localStorage.getItem("webShopSloba"));
    console.log(productsInCart);

    return setShowCart && productsInCart !== undefined ? (
        <div className="cartContainer">
            <div className="productsInCart">
                {productsInCart &&
                    productsInCart.map((product) => {
                        return (
                            <div className="singleCartProduct">
                                <img src={product.image}></img>
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
        </div>
    ) : null;
};

export default Cart;
