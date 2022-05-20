import "./ProductAddedToCartNotification.css";

const ProductAddedToCartNotification = ({ addedNotification }) => {
  return (
    addedNotification && (
      <p className="addedToCartNotification">
        The product has been added to the cart.
      </p>
    )
  );
};

export default ProductAddedToCartNotification;
