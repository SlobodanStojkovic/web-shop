import { getCategoryProducts } from "../../services/getCategoryProducts";
import ProductItem from "../ProductItem/ProductItem";
import "./WomensClothing.css";

const WomensClothing = ({ addedNotificationTimer, productsToShow }) => {
  const products = getCategoryProducts(productsToShow, "women's clothing");

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

export default WomensClothing;
