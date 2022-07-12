import { getCategoryProducts } from "../../services/getCategoryProducts";
import ProductItem from "../ProductItem/ProductItem";
import "./Jewelery.css";

const Jewelery = ({ addedNotificationTimer, productsToShow }) => {
  const products = getCategoryProducts(productsToShow, "jewelery");

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            addedNotificationTimer={addedNotificationTimer}
          />
        );
      })}
    </div>
  );
};

export default Jewelery;
