import { useEffect, useState } from "react";
import fetchSingleProduct from "../../services/fetchSingleProduct";
import { useParams } from "react-router-dom";
import "./SingleProductPage.css";

const SingleProductPage = () => {
    const [productAmount, setProductAmount] = useState("");
    const [singleReport, setSingleReport] = useState([]);

    const id = useParams();
    console.log(singleReport);

    useEffect(() => {
        fetchSingleProduct(id.id).then((productToShow) => {
            let product = {
                ...productToShow,
                amount: 1,
            };
            setSingleReport(product);
        });
    }, [id]);

    useEffect(() => {
        singleReport.amount = productAmount;
    }, [productAmount]);

    return (
        <div className="singleProductPage">
            <div className="imageDiv">
                <p className="productTitleSinglePage">{singleReport.title}</p>
                <img
                    className="productImgSinglePage"
                    src={singleReport.image}
                    alt={singleReport.title}
                ></img>
            </div>
            <p className="itemDescription">{singleReport.description}</p>
            <input
                className="singleProductInput"
                type="number"
                defaultValue="1"
                onChange={(event) => setProductAmount(() => event.target.value)}
                min="0"
                max="10"
            ></input>

            <p>
                Price: ${(singleReport.price * singleReport.amount).toFixed(2)}
            </p>
            {/* <p>Rating: {singleReport.rating.rate}</p> */}

            <button
                className="addToCartButtonSeparatePage" /* onClick={addToCart} */
            >
                Add to cart
            </button>
        </div>
    );
};

export default SingleProductPage;
