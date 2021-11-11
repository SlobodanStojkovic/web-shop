import { Routes, Route, Navigate } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/home" element={<Main />} />
                {/*                 <Route
                    path="/single-product/:id"
                    element={() => <SingleProductPage />}
                /> */}
                <Route path="/" element={<Navigate to="home" />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
