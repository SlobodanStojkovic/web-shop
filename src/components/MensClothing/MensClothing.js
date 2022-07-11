import { useEffect, useState } from "react";

import ProductItem from "../ProductItem/ProductItem";
import "./MensClothing.css";

const MensClothing = ({ addedNotificationTimer, productsToShow }) => {
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    const productsArray = [];
    productsToShow.forEach((element) => {
      if (element.category === "men's clothing") {
        productsArray.push(element);
      }
    });
    setMensClothing(productsArray);
  }, [productsToShow]);

  return (
    <div className="products">
      {mensClothing.map((product) => {
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
