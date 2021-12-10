export const addToCart = (product, productAmount) => {
  let cartItemsForLocalStorage =
    JSON.parse(localStorage.getItem("webShopSloba")) || [];

  cartItemsForLocalStorage.push({
    ...product,
    amount: productAmount,
  });

  localStorage.setItem(
    "webShopSloba",
    JSON.stringify(cartItemsForLocalStorage)
  );
};
