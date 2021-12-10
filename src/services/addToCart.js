export const addToCart = (product, productAmount) => {
  let cartItemsForLocalStorage =
    JSON.parse(localStorage.getItem("webShopSloba")) || [];

  const item = cartItemsForLocalStorage.find((item) => item.id === product.id);

  if (item) {
    item.amount = parseInt(parseInt(item.amount) + parseInt(productAmount));
  } else {
    cartItemsForLocalStorage.push({
      ...product,
      amount: productAmount,
    });
  }
  /* 
  cartItemsForLocalStorage.push({
    ...product,
    amount: productAmount,
  }); */

  localStorage.setItem(
    "webShopSloba",
    JSON.stringify(cartItemsForLocalStorage)
  );
};
