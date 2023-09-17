import React from "react";
import StarRatings from "react-star-ratings";

import css from './footer.module.css'

const Footer = () => {
    return (
        <div>
            <hr className={css.hr}/>
            <div className={css.footerWrap}>
                <div className={css.footerBlockLeft}>
                    <h2>ABOUT ME</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur delectus dolorum facere fugit maiores molestiae molestias,
                        placeat quidem quod recusandae tenetur!</p>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Animi fugiat fugit iste officia reiciendis repellendus,
                        reprehenderit ut vitae?</p>
                    <div><a href=""><img src="" alt=""/></a></div>
                    <div><a href=""><img src="" alt=""/></a></div>
                    <div><a href=""><img src="" alt=""/></a></div>
                    <div><a href=""><img src="" alt=""/></a></div>
                </div  >
                <div className={css.footerBlockRight}>
                    <h2>KEEP IN TOUCH</h2>
                    <div>
                        <StarRatings
                            rating={1}
                            starDimension="15px"
                            starSpacing="5px"
                        /> Address: city, state country
                    </div>
                    <div>
                        <StarRatings
                            rating={1}
                            starDimension="15px"
                            starSpacing="5px"
                        /> Phone +01 00 00 00
                    </div>
                    <div>
                        <StarRatings
                            rating={1}
                            starDimension="15px"
                            starSpacing="5px"
                        /> Email: info@infomill.com
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Footer};
