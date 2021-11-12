import { useEffect, useState } from "react";
import fetchProducts from "../../services/fetchProducts";
import fetchSingleProduct from "../../services/fetchSingleProduct";
import { useParams } from "react-router-dom";
import "./SingleProductPage.css";

const SingleProductPage = (props) => {
    const [productAmount, setProductAmount] = useState("");
    const [singleProductToShow, setSingleProductToShow] = useState([]);
    const [singleReport, setSingleReport] = useState([]);

    const id = useParams();

    useEffect(() => {
        fetchSingleProduct(id).then((productPage) => {
            console.log(id);
            setSingleProductToShow(productPage);
            fetchProducts.then((products) => {
                const filtProd = products.filter(
                    (product) => product.id === productPage.id
                );
                setSingleReport(filtProd);
            });
        });
    }, []);

    return (
        <div className="singleProduct">
            <div className="imageDiv">
                <img
                    className="productImg"
                    src={singleReport.image}
                    alt={singleReport.title}
                ></img>
            </div>

            <p className="productTitle">{singleReport.title}</p>
            <input
                type="number"
                defaultValue="1"
                onChange={(event) => setProductAmount(() => event.target.value)}
                min="0"
                max="10"
            ></input>

            <p>Price: ${(singleReport.price * productAmount).toFixed(2)}</p>
            <p>Rating: {singleReport.rating.rate}</p>

            <button className="addToCartButton" /* onClick={addToCart} */>
                Add to cart
            </button>
        </div>
    );
};

export default SingleProductPage;
