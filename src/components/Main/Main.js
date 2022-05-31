import { Link } from "react-router-dom";
import { addToCart } from "../../services/addToCart";
import "./Main.css";

const Main = ({
  setProductsInCart,
  filteredProducts,
  addedNotificationTimer,
}) => {
  return (
    <div className="products">
      {filteredProducts.map((product) => {
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

            <p>Price: ${(product.price * product.amount).toFixed(2)}</p>
            <p>Rating: {product.rating.rate}</p>

            <button
              className="addToCartButton"
              onClick={() => {
                addToCart(product, product.amount);
                setProductsInCart(() =>
                  JSON.parse(localStorage.getItem("webShopSloba"))
                );
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

export default Main;
