export const getCategoryProducts = (productsToShow, category) => {
  let products = [];
  productsToShow.forEach((element) => {
    if (element.category === category) {
      products.push(element);
    }
  });
  return products;
};
