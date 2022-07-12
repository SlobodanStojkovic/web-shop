import { getCategoryProducts } from "../../services/getCategoryProducts";
import ProductItem from "../ProductItem/ProductItem";
import "./Electronics.css";

const Electronics = ({ addedNotificationTimer, productsToShow }) => {
  const products = getCategoryProducts(productsToShow, "electronics");

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

export default Electronics;
