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
                    title="APPLE iPhone 12 (Blue, 64 GB)"
                    rating={5}
                    price={65990}
                    image="https://i.ibb.co/rftRvvs/apple-iphone-12-dummyapplefsn-original-imafwg8dqq7z8cgh.jpg" alt="iphone12"
                />
                <Product
                    id="2"
                    title="toblerone of Switzerland Milk Chocolate with Honey and Almond Nougat Truffles  (6 x 83.33 g)"
                    rating={4}
                    price={2999}
                    image="https://i.ibb.co/cNCP0dJ/600-milk-chocolate-with-honey-and-almond-nougat-6-pack-pouch-6-x-original-imafzmpfe6yx8ukx.jpg" alt="toblerone truffles"
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Printed Stitched Lehenga Choli  (Blue)"
                    rating={4}
                    price={11999}
                    image="https://i.ibb.co/qjXhcCk/m-sleeveless-sew-0072-saniddhya-original-imag6uqkxgxk2zxj.jpg" alt="lahenga choli"
                />
                <Product
                    id="4"
                    title="NIKE Men Blue REACT INFINITY RUN FK 2 Running Shoes Running Shoes For Men  (Blue)"
                    rating={5}
                    price={14495}
                    image="https://i.ibb.co/G79vDL4/8-13762906-nike-blue-original-imag38jnqkbz2qfc.jpg" alt="nike running shoe"
                />
                <Product
                    id="5"
                    title="Blackberrys 
3 PIECE Solid Men Suit"
                    rating={5}
                    price={27995}
                    image="https://i.ibb.co/WBtQLPf/36-70685-blackberrys-original-imag25y2egkty3au.jpg" alt="blackberrys 2 piece suit"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="LG Nanocell 189 cm (75 inch) Ultra HD (4K) LED Smart TV  (75SM9400PTA)"
                    rating={5}
                    price={499990}
                    image="https://i.ibb.co/jbMtLB3/lg-75sm9400pta-original-imafzzhytkskzc8z.jpg" alt="LG TV"
                />
            </div>
            {/* product */}

        </div>
    )
}
export default Home;