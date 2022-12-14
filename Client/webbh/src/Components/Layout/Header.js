import React from 'react'
import {useNavigate} from "react-router-dom"

const Header = () => {
    const navi = useNavigate();
  return <>
        <header className="header grid wide">
            <div className="header__nav row">
                <div className="header__nav-left l-8 m-9 c-8">
                    <ul className="header__left-list">
                        <li className="header__left-item header__nav-language">
                            <img src="" alt="" className="header__nav-language-img"/>
                            <img src="./assets/img/header/language/vietnam.jpg" className="header__nav-language-img" alt=""/>
                            <div className="header__left-item-link" href="google.com">Việt Nam
                                {/* <!--<i className="header__icon-dow fa-solid fa-chevron-down"></i> --> */}
                                <ul className="header__language-list">
                                    <li className="header__language-list-item">
                                        <div className="header__language-list-item-link" href="google.com">
                                            <img src="./assets/img/header/language/en.jpg" className="header__language-list-item-img" alt=""/>
                                            <span>English</span>    
                                        </div>
                                    </li>
                                    <li className="header__language-list-item">
                                        <div className="header__language-list-item-link" href="google.com">
                                            <img src="./assets/img/header/language/it.jpg" className="header__language-list-item-img" alt=""/>
                                            <span>Italia</span> 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                        </li>
                        <li className="header__left-item header__nav-price">
                            <i className="fa-solid fa-star"></i>
                            <div className="header__left-item-link" href="google.com">VND
                            <i className="header__icon-dow fa-solid fa-chevron-down"></i>
                            <ul className="header__price-list">
                                <li className="header__price-list-item">
                                    <div className="header__price-list-item-link" href="google.com">
                                        <i className="fa-solid fa-dollar-sign"></i>
                                        <span>USD</span>    
                                    </div>
                                </li>
                                <li className="header__price-list-item">
                                    <div className="header__price-list-item-link" href="google.com">
                                        <i className="fa-solid fa-sterling-sign"></i>
                                        <span>GBP</span> 
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="header__nav-right l-4 m-0 c-0">
                    <ul className="header__right-list">
                        <li className="header__right-item">
                            <div className="header__right-item-link" href="google.com"><i className="fa-solid fa-user"></i>
                               <span>Tài khoản</span> 
                            </div>
                        </li>
                        <li className="header__right-item">
                            <div className="header__right-item-link" href="google.com"><i className="fa-regular fa-heart"></i>
                                Danh sách yêu thích</div>
                        </li>
                        <li className="header__right-item">
                            <div className="header__right-item-link" href="google.com"><i className="fa-regular fa-circle-check"></i>
                                Thủ tục thanh toán</div>
                        </li>
                        <li className="header__right-item">
                            <div className="header__right-item-link" onClick={(e) => {navi("/")}}>
                                <i className="fa-solid fa-unlock"></i>
                                Đăng nhập
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="strikethrough"></div>
            <div className="header__search row">
                <div className="header__search-logo col l-3 m-9 c-9">
                    <div href="google.com" className="header__search-logo-link">
                        <img src="./assets/img/header/logo/logo.png" alt="" className="header__search-logo-img"/>
                    </div>
                </div>
                <div className="header__search-search col l-6 m-0 c-0">
                    <form className="header__search-search-form" action="">
                        <input className="header__search-search-input" type="text" placeholder="Nhập tên sản phẩm" id="search"/>
                        <label className="header__search-search-icon" htmlFor="search">
                            <div className="header__search-search-icon-link" href="google.com"><i className="fa-solid fa-magnifying-glass"></i></div>
                        </label>
                    </form>
                </div>
                <div className="header__search-tell col l-2 m-0 c-0">
                    <div className="header__search-tell-link" href="google.comel:(+84)99998943">
                        <img src="./assets/img/header/contact/phone.png" alt="" className="header__search-tell-img"/>
                        <div className="header__search-tell-text">
                            <h1>Gọi mua hàng</h1>
                            <span>(+84).9999.8943</span>
                        </div>
                    </div>
                </div>
                <div className="header__search-cart col l-1 m-3 c-3">
                    <div className="header__search-cart-link" href="google.com">
                        <img src="./assets/img/header/contact/cart.png" alt="" className="header__search-cart-img"/>   
                        <div className="header__search-cart-text">
                            <h1>Giỏ Hàng</h1>
                            <span>0 sản phẩm</span>
                        </div>
                    </div>
                    <div className="header__search-cart-list">
                        <h1>Giỏ Hàng</h1>
                        <span>Giỏ Hàng có 0 sản phẩm</span>
                    </div>
                </div>
            </div>
        </header>
  </>;
};

export default Header