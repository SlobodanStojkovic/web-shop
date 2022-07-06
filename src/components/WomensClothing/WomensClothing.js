import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../services/addToCart";
import "./WomensClothing.css";

const WomensClothing = ({ addedNotificationTimer, productsToShow }) => {
  const [womensClothing, setWomensClothing] = useState([]);

  useEffect(() => {
    const productsArray = [];
    productsToShow.forEach((element) => {
      if (element.category === "women's clothing") {
        productsArray.push(element);
      }
    });
    setWomensClothing(productsArray);
  }, [productsToShow]);

  return (
    <div className="products">
      {womensClothing.map((product) => {
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
              onChange={(event) => (product.amount = () => event.target.value)}
              min="1"
              max="10"
            ></input>

            <p>Price: ${(product.price * product.amount).toFixed(2)}</p>
            <p>Rating: {product.rating.rate}</p>

            <button
              className="addToCartButton"
              onClick={() => {
                addToCart(product, product.amount, womensClothing);
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

export default WomensClothing;
