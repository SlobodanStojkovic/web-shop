export const addToCart = (product, productAmount, productsArray) => {
    let cartItemsForLocalStorage =
        JSON.parse(localStorage.getItem("webShopSloba")) || [];

    productsArray.forEach((element) => {
        if (element.id === product.id) {
            cartItemsForLocalStorage.push({
                ...product,
                amount: productAmount,
            });

            localStorage.setItem(
                "webShopSloba",
                JSON.stringify(cartItemsForLocalStorage)
            );
        }
    });
};
