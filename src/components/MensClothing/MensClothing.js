import { getCategoryProducts } from "../../services/getCategoryProducts";
import ProductItem from "../ProductItem/ProductItem";
import "./MensClothing.css";

const MensClothing = ({ addedNotificationTimer, productsToShow }) => {
  const products = getCategoryProducts(productsToShow, "men's clothing");

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

export default MensClothing;
