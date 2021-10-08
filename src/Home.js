import React from "react";
import Product from "./Product";
import './Home.css';


function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon" />
            {/* product :id ,title,price,rating,image */}
            <div className="home__row">
                <Product
                    id="1"
                    title="Iphone7"
                    rating={4}
                    price={34000}
                    image="https://i.ibb.co/W6LXT6X/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpg"
                />
                <Product
                    id="1"
                    title="Iphone7"
                    rating={4}
                    price={34000}
                    image="https://i.ibb.co/W6LXT6X/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1"
                    title="Iphone7"
                    rating={4}
                    price={34000}
                    image="https://i.ibb.co/W6LXT6X/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpg"
                />
                <Product
                    id="1"
                    title="Iphone7"
                    rating={4}
                    price={34000}
                    image="https://i.ibb.co/W6LXT6X/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpg"
                />
                <Product
                    id="1"
                    title="Iphone7"
                    rating={4}
                    price={34000}
                    image="https://i.ibb.co/W6LXT6X/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="Iphone7"
                    rating={4}
                    price={34000}
                    image="https://i.ibb.co/W6LXT6X/apple-iphone-7-mn8x2hn-a-original-imafkqcqhzxuvcpd.jpg"
                />
            </div>
            {/* product */}

        </div>
    )
}
export default Home;