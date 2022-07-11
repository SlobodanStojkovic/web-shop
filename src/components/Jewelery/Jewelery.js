import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Jewelery.css";

const Jewelery = ({ addedNotificationTimer, productsToShow }) => {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const productsArray = [];
    productsToShow.forEach((element) => {
      if (element.category === "jewelery") {
        productsArray.push(element);
      }
    });
    setJewelery(productsArray);
  }, [productsToShow]);

  return (
    <div className="products">
      {jewelery.map((product) => {
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
