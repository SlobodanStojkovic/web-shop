import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../services/addToCart";
import { useSelector } from "react-redux/es/exports";
import "./Jewelery.css";

const Jewelery = ({ addedNotificationTimer }) => {
  const [jewelery, setJewelery] = useState([]);
  const productsFromRedux = useSelector((state) => state.productsReducer);

  useEffect(() => {
    const productsArray = [];
    productsFromRedux.forEach((element) => {
      if (element.category === "jewelery") {
        productsArray.push(element);
      }
    });
    setJewelery(productsArray);
  }, [productsFromRedux]);

  return (
    <div className="products">
      {jewelery.map((product) => {
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
              min="0"
              max="10"
            ></input>

            <p>Price: ${(product.price * product.amount).toFixed(2)}</p>
            <p>Rating: {product.rating.rate}</p>

            <button
              className="addToCartButton"
              onClick={() => {
                addToCart(product, product.amount, jewelery);
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

export default Jewelery;
