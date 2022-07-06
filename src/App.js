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
import { useDispatch } from "react-redux/es/exports";
import "./App.css";
import { addCategory } from "./store/productsSlice";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [addedNotification, setAddedNotification] = useState(false);
  const dispatch = useDispatch();

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
      dispatch({ type: addCategory, action: products });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />

      <Search
        products={products}
        productsToShow={productsToShow}
        setProductsToShow={setProductsToShow}
      />

      <ProductAddedToCartNotification
        addedNotification={addedNotification}
        setAddedNotification={setAddedNotification}
      />

      <Routes>
        <Route
          path="/home"
          element={
            <Main
              productsToShow={productsToShow}
              addedNotificationTimer={addedNotificationTimer}
              setProductsInCart={setProductsInCart}
            />
          }
        />
        <Route
          path="/electronics"
          element={
            <Electronics
              productsToShow={productsToShow}
              addedNotificationTimer={addedNotificationTimer}
            />
          }
        />

        <Route
          path="/jewelery"
          element={
            <Jewelery
              productsToShow={productsToShow}
              addedNotificationTimer={addedNotificationTimer}
            />
          }
        />

        <Route
          path="/mens-clothing"
          element={
            <MensClothing
              productsToShow={productsToShow}
              addedNotificationTimer={addedNotificationTimer}
            />
          }
        />

        <Route
          path="/womens-clothing"
          element={
            <WomensClothing
              productsToShow={productsToShow}
              addedNotificationTimer={addedNotificationTimer}
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
        <Route path="*" element={<Navigate to="/home" replace />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
