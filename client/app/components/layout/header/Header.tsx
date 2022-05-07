import {FC} from "react";


const Header:FC = () => {
    return (
        <header id="header">
            <div className="search_top">
                <label>
                    <input type="text" placeholder="Search videos, stars or authors..."/>
                    <img src="../../../public/img/common/search.svg" alt=""/>
                </label>
            </div>
            <div className="icons_right">
                <a href="#"><img src="../../../public/img/common/plus.svg" alt=""/></a>
                <a href="#"><img src="../../../public/img/common/review.svg" alt=""/></a>
                <a href="#"><img src="../../../public/img/common/basket.svg" alt=""/></a>
            </div>
        </header>
    );
};

export default Header;