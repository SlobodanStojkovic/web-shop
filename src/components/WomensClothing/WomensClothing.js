import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
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
          <ProductItem
            product={product}
            addedNotificationTimer={addedNotificationTimer}
          />
        );
      })}
    </div>
  );
};

export default WomensClothing;
