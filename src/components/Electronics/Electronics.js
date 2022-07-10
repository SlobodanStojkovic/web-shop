import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Electronics.css";

const Electronics = ({ addedNotificationTimer, productsToShow }) => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const productsArray = [];
    productsToShow.forEach((element) => {
      if (element.category === "electronics") {
        productsArray.push(element);
      }
    });
    setElectronics(productsArray);
  }, [productsToShow]);

  return (
    <div className="products">
      {electronics.map((product) => {
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

export default Electronics;
