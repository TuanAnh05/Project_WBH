import React from 'react';

const SideBarRow1 = () => {
    return (
        <div className="slide1 row no-gutters">
            <div className="slide1__category col l-3 m-0 c-0">
                <div className="slide1__category-header">
                    <h3>
                        <i className="slide1__category-header-icon fa-solid fa-bars-staggered"></i>
                        DANH MỤC
                    </h3>
                </div>
                <ul className="slide1__category-list">
                    <li className="slide1__category-item">
                        <i className="fa-solid fa-desktop"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/bedding.png" alt="" className="slide1__category-item-icon"> --> */}
                            <span>PC Gaming, Streaming</span>
                        </div>
                    </li>

                    <li className="slide1__category-item ">
                        <i className="fa-solid fa-tablet"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!-- <img src="./assets/img/container/slide1/icon category/kitchen.png" alt="" className="slide1__category-item-icon"> --> */}
                            <span>Laptop, Tablet, Mobile</span>
                            {/* <!--<i className="slide1__category-icon-load-more fa-solid fa-angle-right"></i> --> */}
                        </div>
                        <div className="slide1__item-kitchen row">
                            <div className="slide1__item-kitchen-container col l-4">
                                <h3 className="slide1__item-kitchen-header">
                                    <span>ĐIỆN THOẠI</span>
                                </h3>
                                <ul className="slide1__item-kitchen-list">
                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Điện Thoại Iphone
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Điện thoại SamSung
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Điện thoại Oppo
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Điện thoại Xiaomi
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide1__item-kitchen-container col l-4">
                                <h3 className="slide1__item-kitchen-header">
                                    <span>MÁY TÍNH XÁCH TAY</span>
                                </h3>
                                <ul className="slide1__item-kitchen-list">
                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Laptop Dell
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Laptop Asus
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Microsoft Surface
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Macbook
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide1__item-kitchen-container col l-4">
                                <h3 className="slide1__item-kitchen-header">
                                    <span>MÁY TÍNH BẢNG</span>
                                </h3>
                                <ul className="slide1__item-kitchen-list">
                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Máy tính bảng Samsung Galaxy
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Máy tính bảng Apple Ipad
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Máy tính bảng Microsoft Surface
                                        </div>
                                    </li>

                                    <li className="slide1__item-kitchen-sub">
                                        <div href="google.com" className="slide1__item-kitchen-link">
                                            Máy tính bảng Lenovo
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide1__item-kitchen-img"></div>
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-laptop"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/Beds.png" alt="" className="slide1__category-item-icon">--> */}
                            <span>PC Văn Phòng, AIO, Mini PC</span>
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-keyboard"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/Bed room.png" alt="" className="slide1__category-item-icon">--> */}
                            <span>Phụ kiện Laptop, PC, Mobile</span>
                            <i className="slide1__category-icon-load-more fa-solid fa-angle-right"></i>
                        </div>
                        <div className="slide1__item-bedroom row">
                            <div className="slide1__item-bedroom-container col l-4">
                                <div href="google.com" className="slide1__item-bedroom-link-img">
                                    <img
                                        className="slide1__item-bedroom-img"
                                        src="./assets/img/container/slide1/category-bedroom/baner2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="slide1__item-bedroom-page slide1__item-bedroom-page--current"></div>
                                <div className="slide1__item-bedroom-page"></div>
                            </div>
                            <div className="slide1__item-bedroom-container col l-4">
                                <h3 className="slide1__item-bedroom-header">
                                    <span>PHỤ KIỆN LAPTOP</span>
                                </h3>
                                <ul className="slide1__item-bedroom-list">
                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Balo, cặp, túi chống sốc
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Đế tản nhiệt Laptop
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Bàn phím laptop
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            RAM laptop
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Ổ cứng laptop
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Sạc laptop
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="slide1__item-bedroom-container col l-4">
                                <h3 className="slide1__item-bedroom-header">
                                    <span>PHỤ KIỆN MOBILE, TABLET</span>
                                </h3>
                                <ul className="slide1__item-bedroom-list">
                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Cáp Sạc
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Bàn Phím Máy Tính Bảng
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Pin Dự Phòng
                                        </div>
                                    </li>

                                    <li className="slide1__item-bedroom-sub">
                                        <div href="google.com" className="slide1__item-bedroom-link">
                                            Củ Sạc
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-computer-mouse"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/living room.png" alt="" className="slide1__category-item-icon">--> */}
                            <span>Phím Chuột, Ghế Game, Gear</span>
                            {/* <!--<i className="slide1__category-icon-load-more fa-solid fa-angle-right"></i>--> */}
                        </div>
                        <div className="slide1__item-living-room row">
                            <div className="slide1__item-living-room-container col l-4">
                                <h3 className="slide1__item-living-room-header">
                                    <span>BÀN PHÍM, CHUỘT</span>
                                </h3>
                                <ul className="slide1__item-living-room-list">
                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Bàn Phím Máy Tính
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Chuột máy tính
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Bàn Phím Chuột Không Dây
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Phụ Kiện Bàn Phím, Chuột
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Lót Chuột/ Bàn Di Chuột
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide1__item-living-room-container col l-4">
                                <h3 className="slide1__item-living-room-header">
                                    <span>TAI NGHE GAMING</span>
                                </h3>
                                <ul className="slide1__item-living-room-list">
                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Ghế gaming, ghế chơi game
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Bàn gaming giá rẻ
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Tai nghe gaming
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Ghế Chơi Game Giả Lập
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Phụ Kiện Gaming
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide1__item-living-room-container col l-4">
                                <h3 className="slide1__item-living-room-header">
                                    <span>BÀN, GHẾ GAMING</span>
                                </h3>
                                <ul className="slide1__item-living-room-list">
                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Ghế gaming
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Bàn gaming cao cấp
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Tai nghe gaming
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Phụ Kiện Gaming
                                        </div>
                                    </li>

                                    <li className="slide1__item-living-room-sub">
                                        <div href="google.com" className="slide1__item-living-room-link">
                                            Ghế Chơi Game Giả Lập
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--
                                    <div className="slide1__item-living-room-container col l-4">
                                        <h3 className="slide1__item-living-room-header">
                                            <span>SẢN PHẨM MỚI</span> 
                                            <div className="slide1__item-living-room-header-icon">
                                                <i className="slide1__item-living-room-header-icon fa-solid fa-arrow-right"></i>
                                                <i className="slide1__item-living-room-header-icon fa-solid fa-arrow-left"></i> 
                                            </div>
                                        </h3>
                                        
                                        <div className="slide1__item-living-room-item slide1__item-living-room-item-strikethrough row">
                                            <div href="google.com" className="slide1__item-living-room-link col l-3">
                                                <img src="./assets/img/container/slide1/category-livingroom/product1.jpg" alt="" className="slide1__item-living-room-img">
                                            </a>
                                            <div className="slide1__item-living-room-description col l-8">
                                                <h3>Tai nghe ASUS Cerberus V2</h3>
                                                <span className="slide1__item-living-room-price">1.519.000₫</span>
                                                <span className="slide1__item-living-room-price slide1__item-living-room-price--current">899.000₫</span>
                                            </div>
                                        </div>
    
                                        <div className="slide1__item-living-room-item row">
                                            <div href="google.com" className="slide1__item-living-room-link col l-3">
                                                <img src="./assets/img/container/slide1/category-livingroom/product2.jpg" alt="" className="slide1__item-living-room-img">
                                            </a>
                                            <div className="slide1__item-living-room-description col l-8">
                                                <h3>GHẾ CHƠI GAME GIẢ LẬP INGREM  VEYRON J20 WHITE</h3>
                                                <span className="slide1__item-living-room-price">$ 18.00</span>
                                                <span className="slide1__item-living-room-price slide1__item-living-room-price--current">130.289.000₫</span>
                                            </div>
                                        </div>
                                    </div>
                                --> */}
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-headphones"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/bath room.png" alt="" className="slide1__category-item-icon">--> */}
                            <span>Loa, Tai Nghe, Mic, Webcam</span>
                            {/* <!--<i className="slide1__category-icon-load-more fa-solid fa-angle-right"></i>--> */}
                        </div>

                        <div className="slide1__item-bath-room">
                            <div className="slide1__item-bath-room-container">
                                <ul className="slide1__item-bath-room-list">
                                    <li className="slide1__item-bath-room-sub">
                                        <div href="google.com" className="slide1__item-bath-room-link">
                                            Máy Trợ Giảng
                                        </div>
                                    </li>

                                    <li className="slide1__item-bath-room-sub">
                                        <div href="google.com" className="slide1__item-bath-room-link">
                                            Card Âm Thanh
                                        </div>
                                    </li>

                                    <li className="slide1__item-bath-room-sub">
                                        <div href="google.com" className="slide1__item-bath-room-link">
                                            Microphone
                                        </div>
                                    </li>

                                    <li className="slide1__item-bath-room-sub">
                                        <div href="google.com" className="slide1__item-bath-room-link">
                                            Camera du lịch, dã ngoại Gopro
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-microchip"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/lighting.png" alt="" className="slide1__category-item-icon">--> */}
                            <span>Linh Kiện Máy Tính</span>
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-camera"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/accessiries.png" alt="" className="slide1__category-item-icon"> --> */}
                            <span>Camera Quan Sát</span>
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-network-wired"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/living room lighting.png" alt="" className="slide1__category-item-icon">--> */}
                            <span>Thiết Bị Mạng, Phần Mềm</span>
                        </div>
                    </li>

                    <li className="slide1__category-item">
                        <i className="fa-solid fa-gamepad"></i>
                        <div href="google.com" className="slide1__category-item-link">
                            {/* <!--<img src="./assets/img/container/slide1/icon category/sofa & armchairs.png" alt="" className="slide1__category-item-icon">--> */}
                            <span>Máy Chơi Game, Tay Game</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="slide1__sidebar-mobile m-1 c-1">
                <label htmlFor="slide1__sidebar-mobile-check" className="slide__sidebar-mobile-header">
                    <i className="slide__sidebar-mobile-header-icon fa-solid fa-arrows-left-right-to-line"></i>
                    <i className="slide__sidebar-mobile-header-icon-2 fa-solid fa-bars"></i>
                </label>
                <input
                    hidden
                    className="slide1__sidebar-mobile-input"
                    id="slide1__sidebar-mobile-check"
                    type="checkbox"
                />
                <ul className="slide1__sidebar-mobile-list">
                    <li className="slide1__sidebar-mobile-item">
                        <div
                            className="slide1__sidebar-mobile-item-link slide1__sidebar-mobile-item-link--current"
                            href="google.com"
                        >
                            <i className="slide1__sidebar-mobile-item-icon fa-solid fa-house-chimney "></i>
                            <ul className="slide1__sidebar-home-list slide1__sidebar-home-list-2">
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Home Page 1
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Home Page 2
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Home Page 3
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Home Page 4
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Home Page 5
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Home Page 6
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Home Page 7
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="slide1__sidebar-mobile-item">
                        <div
                            className="slide1__sidebar-mobile-item-link slide1__sidebar-mobile-item-link--current"
                            href="google.com"
                        >
                            <i className="slide1__sidebar-mobile-item-icon fa-solid fa-briefcase"></i>
                            <ul className="slide1__sidebar-home-list slide1__sidebar-home-list-2">
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Default
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Default
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Default
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Default
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Default
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Default
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Default
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="slide1__sidebar-mobile-item">
                        <div
                            className="slide1__sidebar-mobile-item-link slide1__sidebar-mobile-item-link--current"
                            href="google.com"
                        >
                            <i className="slide1__sidebar-mobile-item-icon fa-solid fa-bag-shopping"></i>
                            <ul className="slide1__sidebar-home-list slide1__sidebar-home-list-2">
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        404 Not Found
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        404 Not Found
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        404 Not Found
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        404 Not Found
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        404 Not Found
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        404 Not Found
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        404 Not Found
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="slide1__sidebar-mobile-item">
                        <div
                            className="slide1__sidebar-mobile-item-link slide1__sidebar-mobile-item-link--current"
                            href="google.com"
                        >
                            <i className="slide1__sidebar-mobile-item-icon fa-solid fa-book"></i>
                            <ul className="slide1__sidebar-home-list slide1__sidebar-home-list-2">
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Coming Soon
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Coming Soon
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Coming Soon
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Coming Soon
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Coming Soon
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Coming Soon
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Coming Soon
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="slide1__sidebar-mobile-item">
                        <div
                            className="slide1__sidebar-mobile-item-link slide1__sidebar-mobile-item-link--current"
                            href="google.com"
                        >
                            <i className="slide1__sidebar-mobile-item-icon fa-solid fa-mug-hot"></i>
                            <ul className="slide1__sidebar-home-list slide1__sidebar-home-list-2">
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Mansory
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Mansory
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Mansory
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Mansory
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Mansory
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Mansory
                                    </div>
                                </li>
                                <li className="slide1__sidebar-home-item">
                                    <div href="google.com" className="slide1__sidebar-home-link">
                                        Blog Mansory
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="slide1__sidebar-mobile-sub c-0 m-0">
                    <ul className="slide1__sidebar-mobile-sub-home-list">
                        <li className="slide1__sidebar-mobile-sub-home-item">
                            <div href="" className="slide1__sidebar-mobile-sub-home-link">
                                ĐANG BÍ Ý TƯỞNG :)))
                            </div>
                        </li>

                        <li className="slide1__sidebar-mobile-sub-home-item">
                            <div href="" className="slide1__sidebar-mobile-sub-home-link">
                                ĐANG BÍ Ý TƯỞNG :)))
                            </div>
                        </li>

                        <li className="slide1__sidebar-mobile-sub-home-item">
                            <div href="" className="slide1__sidebar-mobile-sub-home-link">
                                ĐANG BÍ Ý TƯỞNG :)))
                            </div>
                        </li>

                        <li className="slide1__sidebar-mobile-sub-home-item">
                            <div href="" className="slide1__sidebar-mobile-sub-home-link">
                                ĐANG BÍ Ý TƯỞNG :)))
                            </div>
                        </li>

                        <li className="slide1__sidebar-mobile-sub-home-item">
                            <div href="" className="slide1__sidebar-mobile-sub-home-link">
                                ĐANG BÍ Ý TƯỞNG :)))
                            </div>
                        </li>

                        <li className="slide1__sidebar-mobile-sub-home-item">
                            <div href="" className="slide1__sidebar-mobile-sub-home-link">
                                ĐANG BÍ Ý TƯỞNG :)))
                            </div>
                        </li>

                        <li className="slide1__sidebar-mobile-sub-home-item">
                            <div href="" className="slide1__sidebar-mobile-sub-home-link">
                                ĐANG BÍ Ý TƯỞNG :)))
                            </div>
                        </li>
                    </ul>
                </div>
                <label htmlFor="slide1__sidebar-mobile-check" className="slide1__sidebar-mobile-overlay" />
            </div>
            <div className="slide1__content col l-9 m-11 c-11">
                <div className="slide1__content-sidebar col l-12 m-0 c-0">
                    <ul className="slide1__content-sidebar-list">
                        <li className="slide1__content-sidebar-item">
                            <div
                                className="slide1__content-sidebar-item-link slide1__content-sidebar-item-link--current"
                                href="google.com"
                            >
                                <i className="slide1__content-sidebar-item-icon fa-solid fa-earth-africa"></i>
                                <span>TRANG CHỦ</span>
                            </div>
                            {/* <!--
                                    <ul className="slide1__sidebar-home-list">
                                        <li className="slide1__sidebar-home-item">
                                            <div href="google.com" className="slide1__sidebar-home-link">
                                                Home Page 1
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-home-item">
                                            <div href="google.com" className="slide1__sidebar-home-link">
                                                Home Page 2
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-home-item">
                                            <div href="google.com" className="slide1__sidebar-home-link">
                                                Home Page 3
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-home-item">
                                            <div href="google.com" className="slide1__sidebar-home-link">
                                                Home Page 4
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-home-item">
                                            <div href="google.com" className="slide1__sidebar-home-link">
                                                Home Page 5
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-home-item">
                                            <div href="google.com" className="slide1__sidebar-home-link">
                                                Home Page 6
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-home-item">
                                            <div href="google.com" className="slide1__sidebar-home-link">
                                                Home Page 7
                                            </div>
                                        </li>
                                    </ul> --> */}
                        </li>
                        <li className="slide1__content-sidebar-item">
                            <div className="slide1__content-sidebar-item-link" href="google.com">
                                <i className="slide1__content-sidebar-item-icon fa-solid fa-briefcase"></i>
                                <span>TIN TỨC</span>
                            </div>
                            {/* <!--
                                    <ul className="slide1__sidebar-blog-list">
                                        <li className="slide1__sidebar-blog-item">
                                            <div href="google.com" className="slide1__sidebar-blog-link">
                                                Blog Default
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-blog-item">
                                            <div href="google.com" className="slide1__sidebar-blog-link">
                                                Blog List
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-blog-item">
                                            <div href="google.com" className="slide1__sidebar-blog-link">
                                                Blog Masonry
                                            </div>
                                        </li>
                                        <li className="slide1__sidebar-blog-item">
                                            <div href="google.com" className="slide1__sidebar-blog-link">
                                                Single Post
                                            </div>
                                        </li>
                                    </ul> --> */}
                        </li>
                        <li className="slide1__content-sidebar-item">
                            <div className="slide1__content-sidebar-item-link" href="google.com">
                                <i className="slide1__content-sidebar-item-icon fa-solid fa-bag-shopping"></i>
                                <span>SẢN PHẨM</span>
                            </div>
                            <div className="slide1__sidebar-shop-pages-list row">
                                <div className="slide1__sidebar-shop-page-item col l-3">
                                    <h3 className="slide1__sidebar-shop-page-header">
                                        <span>LAPTOP, TABLET, MOBILE</span>
                                    </h3>
                                    <ul className="slide1__sidebar-shop-page-list-sub">
                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!-- <img src="./assets/img/container/slide1/icon category/living room.png" alt="" className="slide1__sidebar-shop-page-icon"> --> */}
                                                <span>Điện Thoại Iphone</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!-- <img src="./assets/img/container/slide1/icon category/Bed room.png" alt="" className="slide1__sidebar-shop-page-icon"> --> */}
                                                <span>Macbook</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!-- <img src="./assets/img/container/slide1/icon category/bath room.png" alt="" className="slide1__sidebar-shop-page-icon"> --> */}
                                                <span>Máy tính bảng Samsung Galaxy</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!-- <img src="./assets/img/container/slide1/icon category/kitchen.png" alt="" className="slide1__sidebar-shop-page-icon"> --> */}
                                                <span>Laptop Dell</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!-- <img src="./assets/img/container/slide1/icon category/accessiries.png" alt="" className="slide1__sidebar-shop-page-icon"> --> */}
                                                <span>Máy tính bảng Apple Ipad</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="slide1__sidebar-shop-page-item col l-3">
                                    <h3 className="slide1__sidebar-shop-page-header">
                                        <span>PHỤ KIỆN LAPTOP, PC, MOBILE</span>
                                    </h3>
                                    <ul className="slide1__sidebar-shop-page-list-sub">
                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Balo, cặp, túi chống sốc</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Đế tản nhiệt Laptop</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>RAM laptop</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Bàn Phím Máy Tính Bảng</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Pin Dự Phòng</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="slide1__sidebar-shop-page-item col l-3">
                                    <h3 className="slide1__sidebar-shop-page-header">
                                        <span>PHÍM CHUỘT, GHẾ GAME, GEAR</span>
                                    </h3>
                                    <ul className="slide1__sidebar-shop-page-list-sub">
                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Bàn Phím Máy Tính</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Tai nghe gaming</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Ghế Chơi Game Giả Lập</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Bàn gaming giá rẻ</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Bàn Phím Chuột Không Dây</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                <span>Chuột máy tính</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="slide1__sidebar-shop-page-item col l-3">
                                    <h3 className="slide1__sidebar-shop-page-header">
                                        <span>LOA, TAI NGHE, MIC, WEBCAM</span>
                                    </h3>
                                    <ul className="slide1__sidebar-shop-page-list-sub">
                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!--  <i className="slide1__sidebar-shop-page-link-icon fa-solid fa-image"></i> --> */}
                                                <span>Máy Trợ Giảng</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!--   <i className="slide1__sidebar-shop-page-link-icon fa-regular fa-clock"></i> --> */}
                                                <span>Card Âm Thanh</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!--  <i className="slide1__sidebar-shop-page-link-icon fa-solid fa-play"></i> --> */}
                                                <span>Microphone</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!-- <i className="slide1__sidebar-shop-page-link-icon fa-regular fa-circle"></i> --> */}
                                                <span>Camera du lịch, dã ngoại Gopro</span>
                                            </div>
                                        </li>

                                        <li className="slide1__sidebar-shop-page-list-sub-item">
                                            <div href="google.com" className="slide1__sidebar-shop-page-link">
                                                {/* <!--<i className="slide1__sidebar-shop-page-link-icon fa-solid fa-expand"></i> --> */}
                                                <span>Loa</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="slide1__content-sidebar-item">
                            <div className="slide1__content-sidebar-item-link" href="google.com">
                                <i className="slide1__content-sidebar-item-icon fa-solid fa-mug-hot"></i>
                                <span>TUYỂN DỤNG</span>
                            </div>
                        </li>
                        <li className="slide1__content-sidebar-item">
                            <div className="slide1__content-sidebar-item-link" href="google.com">
                                <i className="slide1__content-sidebar-item-icon fa-solid fa-earth-africa"></i>
                                <span>LIÊN LẠC</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="slide1__content-home m-12 c-12">
                    <div className="slide1__content-home-content">
                        <span>Make your life better</span>
                        <h3>FOTOR TECHNOLOGY</h3>
                        <form action="">
                            <button className="slide1__content-home-content-btn slide1__content-home-content-btn--current">
                                ĐỌC THÊM
                            </button>
                            <button className="slide1__content-home-content-btn">MUA NGAY</button>
                        </form>
                        <div className="slide1__content-home-content-page "></div>
                        <div className="slide1__content-home-content-page "></div>
                        <div className="slide1__content-home-content-page slide1__content-home-content-page-lar slide1__content-home-content-page--current"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBarRow1;
