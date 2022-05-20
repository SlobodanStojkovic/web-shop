import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Electronics from "./components/Electronics/Electronics";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage";
import fetchProducts from "./services/fetchProducts";
import Search from "./components/Search/Search";
import ProductAddedToCartNotification from "./components/ProductAddedToCartNotification/ProductAddedToCartNotification";
import Jewelery from "./components/Jewelery/Jewelery";
import MensClothing from "./components/MensClothing/MensClothing";
import WomensClothing from "./components/WomensClothing/WomensClothing";
import "./App.css";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [addedNotification, setAddedNotification] = useState(false);
  const [productAmount, setProductAmount] = useState(1);

  const addedNotificationTimer = () => {
    setAddedNotification(true);
    setTimeout(() => {
      setAddedNotification(false);
    }, 5000);
  };

  useEffect(() => {
    setProductsInCart(() => JSON.parse(localStorage.getItem("webShopSloba")));

    fetchProducts().then((products) => {
      setProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  return (
    <div className="App">
      <Header
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />

      <Search products={products} setFilteredProducts={setFilteredProducts} />

      <ProductAddedToCartNotification
        addedNotification={addedNotification}
        setAddedNotification={setAddedNotification}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Main
              filteredProducts={filteredProducts}
              addedNotificationTimer={addedNotificationTimer}
              productAmount={productAmount}
              setProductAmount={setProductAmount}
              setProductsInCart={setProductsInCart}
            />
          }
        />
        <Route
          path="/electronics"
          element={
            <Electronics
              addedNotificationTimer={addedNotificationTimer}
              productAmount={productAmount}
              setProductAmount={setProductAmount}
            />
          }
        />

        <Route
          path="/jewelery"
          element={
            <Jewelery
              addedNotificationTimer={addedNotificationTimer}
              productAmount={productAmount}
              setProductAmount={setProductAmount}
            />
          }
        />

        <Route
          path="/mens-clothing"
          element={
            <MensClothing
              addedNotificationTimer={addedNotificationTimer}
              productAmount={productAmount}
              setProductAmount={setProductAmount}
            />
          }
        />

        <Route
          path="/womens-clothing"
          element={
            <WomensClothing
              addedNotificationTimer={addedNotificationTimer}
              productAmount={productAmount}
              setProductAmount={setProductAmount}
            />
          }
        />

        <Route
          path="/single-product/:id"
          element={
            <SingleProductPage
              addedNotificationTimer={addedNotificationTimer}
              setProductsInCart={setProductsInCart}
            />
          }
        />
        <Route path="/" element={<Navigate to="home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
