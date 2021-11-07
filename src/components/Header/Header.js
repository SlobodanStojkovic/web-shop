import "./Header.css";
import shoppingCart from "./assets/shoppingCart.png";

const Header = () => {
    return (
        <header>
            <a className="homeLink" href="./">Home</a>
            <button className="shoppingCardButton"><img className="shoppingCartImage" alt="shopping" src={shoppingCart}></img>Cart</button>
        </header>
    );
};

export default Header;
