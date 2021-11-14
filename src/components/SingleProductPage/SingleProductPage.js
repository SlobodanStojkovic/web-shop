import { useEffect, useState } from "react";
import fetchSingleProduct from "../../services/fetchSingleProduct";
import { useParams } from "react-router-dom";
import "./SingleProductPage.css";

const SingleProductPage = () => {
    const [productAmount, setProductAmount] = useState(1);
    const [singleReport, setSingleReport] = useState([]);

    const id = useParams();

    useEffect(() => {
        fetchSingleProduct(id.id).then((productToShow) => {
            let product = {
                ...productToShow,
                amount: 1,
            };
            setSingleReport(product);
            console.log(product);
        });
    }, [id]);

    const addToCartSinglePage = (report) => {
        let cartItemsForLocalStorage =
            JSON.parse(localStorage.getItem("webShopSloba")) || [];

        cartItemsForLocalStorage.push({
            ...report,
            amount: productAmount,
        });

        localStorage.setItem(
            "webShopSloba",
            JSON.stringify(cartItemsForLocalStorage)
        );
    };

    /*   useEffect(() => {
        singleReport.amount = productAmount;
    }, [singleReport, productAmount]); */

    console.log(singleReport);

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
            {<p>Rating: {singleReport.rating && singleReport.rating.rate}</p>}

            <button
                onClick={() => addToCartSinglePage(singleReport)}
                className="addToCartButtonSeparatePage"
            >
                Add to cart
            </button>
        </div>
    );
};

export default SingleProductPage;
