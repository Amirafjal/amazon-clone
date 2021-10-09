import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // add item to basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };




    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐️</p>
                            ))
                    }
                </div>
            </div>

            <img src={image} alt="iphone7" />
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    );
}
export default Product;