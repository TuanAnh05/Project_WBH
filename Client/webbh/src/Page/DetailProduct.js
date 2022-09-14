import React from 'react'
import { InputNumber,Descriptions } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Layout/Header';
import HTMLReactParser from "html-react-parser";
import {Button} from "antd";
import "../Style/detailProduct.css";
import 'antd/dist/antd.css';

const DetailProduct = () => {
    const {state} = useLocation();
    const onChange = (value) => {
        console.log('changed', value);
      };

    const descriptionProtion = `👉 Không chỉ chụp ảnh tự sướng, mà còn chụp ảnh và quay video với độ ổn định tuyệt vời trong khi giải phóng đôi tay của bạn. Hoàn hảo cho ảnh tự chụp, ảnh nhóm, du lịch phiêu lưu, video, phát trực tiếp.
    👉 Khóa ngang tự động 180 độ, chuyển đổi màn hình ngang và dọc 360 độ.
    👉 Tương thích với điện thoại thông minh, camera 3,5-6.0in.
    
    🔱 Thông số kỹ thuật: 
    *Chất liệu: hợp kim nhôm
    *Kích thước: 330 * 40 * 50mm
    *Chiều dài chân máy: lên tới 86cm
    *Pin: 450mAh
    *Phiên bản Bluetooth: 4.0
    *Khoảng cách Bluetooth: lên tới 6m
    *Hỗ trợ kích thước điện thoại: 3,5-6,0 inch
    gói bao gồm:
    1 x Chân máy ảnh tự sướng
    1 x cáp sạc
    
    🔱 Hướng dẫn:
    1. Bấm và giữ nút điều khiển từ xa để bật điều khiển từ xa. Đèn báo màu xanh nhấp nháy.
    2. Bật Bluetooth điện thoại của bạn, tìm kiếm thiết bị mới "SelfieCom" và kết nối.
    3. Sau khi ghép nối và kết nối, hãy mở phần mềm camera điện thoại.
    4. Đặt tư thế và bấm nút chụp của điều khiển từ xa để chụp
    
    -----  CAM  KẾT CỦA SHOP-----
       - Hàng mới  100%  mới, hàng chất lượng. 
       - Miễn phí đổi trả trong vòng 7 ngày do lỗi của nhà sản xuất
       - Không bảo hành sản phẩm nước vào
    
    #tripod #tripodmayanh #phukienmayanh #tripodcamera #smooth 4 #zhiyun #gimbal #chongrung #smoothQ #TAYCAMCHONGRUNG #GimbalH4 #antishake #smooth4 #vimble2 #osmo #gimball08
    #gimbal, #gimbal_baseus, #gimbal_cầm_tay, #gimbal_gopro, #gimbal_chống_rung_điện_thoại, #gimbal_mini_s, #gimbal_vlog, #gimbal_feiyu_vimble_2, #gimbal_ronin, #gimbal_chống_rung_giá_rẻ
    #gimbal_chống_rung_điện_thoại, #gimbal_chống_rung_giá_rẻ, #gimbal_chống_rung_zhiyun_smooth_x, #gimbal_chống_rung_cho_máy_ảnh, #gimbal_chống_rung_zhiyun_smooth_q2, #gimbal_chống_rung_quay_phim_smooth_4, #gimbal_chống_rung_moza_mini_s, #gimbal_chống_runggimbal_chống_nước`

  return (
    <div>
        <Header/>
        <div className='detailProduct'>
                    <div className='itemLeft' style={{ height: "475px" }}>
                        <img src={state.nameImage} alt=""/>
                    </div>
                    <div className='itemRight'>
                        <div>
                            <h2 className='nameProduct'>
                                {state !== undefined
                                    ? state.nameProduct
                                    : ""}
                            </h2>
                            <div
                                className='reviewProduct'
                                style={{ marginTop: 85 }}
                            >
                                <div className='review-Damua'>
                                    Đã bán:
                                    {state !== undefined
                                        ? state.countBuy
                                        : ""}
                                </div>
                            </div>

                            <div className='price-product'>
                                <div
                                    className='origin-price'
                                    style={{ fontSize: 15 }}
                                >
                                    ₫{" "}
                                    {state !== undefined
                                        ? state.price.toLocaleString(
                                              "vi-VN",
                                              {
                                                  style: "currency",
                                                  currency: "VND",
                                              }
                                          )
                                        : ""}
                                </div>
                                
                            </div>

                            <div className='qualiti-product'>
                                <span>Số lượng</span>
                                <InputNumber min={1} max={10} defaultValue={3} onChange={onChange}/>
                                
                                {/* <span className='avaliable-product'>
                                    {products !== undefined
                                        ? `${products.quantity}`
                                        : ""}{" "}
                                    sản phẩm có sẵn
                                </span> */}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    marginTop: "15px",
                                }}
                            >
                                <Button
                                    size='large'
                                    shape='round'
                                    type='danger'
                                    // onClick={addToCarthandler}
                                >
                                    Thêm vào giỏ hàng
                                </Button>
                            </div>
                            <div className='policy'>
                                <div className='return-policy'>
                                    7 ngày miễn phí trả hàng
                                </div>
                                <div className='price-ship'>
                                    Đảm bảo hàng chính hãng
                                </div>
                                <div className='price-real'>
                                    Giao hàng nhanh chóng
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <strip></strip>
                {/* <div className='detail-more-Product'>
                    {
                        descriptionProtion
                    }
                </div> */}
                <div className='detail-more-Product'>
                    <div className='more-detail'>
                        <h2 className='title-detail'>Chi tiết sản phẩm</h2>
                        {/* <Descriptions>
                            <Descriptions.Item label='Thương hiệu: '>
                                {products !== undefined
                                    ? `${products.nameManufacturer}`
                                    : ""}
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>
                            <Descriptions.Item label='Xuất xứ: '>
                                {products !== undefined
                                    ? `${products.nameOrigin}`
                                    : ""}
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>
                            <Descriptions.Item label='Số lượng còn lại: '>
                                {products !== undefined
                                    ? `${products.quantity}`
                                    : ""}
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>
                            <Descriptions.Item label='Gửi từ: '>
                                Hà nội
                            </Descriptions.Item>
                        </Descriptions> */}
                    </div>
                    <div>
                        <h2 className='title-detail'>Mô tả sản phẩm</h2>
                        {state !== undefined
                            ? HTMLReactParser(`${descriptionProtion}`)
                            : ""}
                    </div>
                </div>

    </div>
  )
}

export default DetailProduct