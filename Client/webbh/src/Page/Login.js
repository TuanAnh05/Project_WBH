import React from 'react';
import "../Style/login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navi = useNavigate();
  return (
    <div className="from_login">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
            <div className="box--square" ></div>
            <div className="box--square" ></div>
            <div className="box--square" ></div>
            <div className="box--square" ></div>
            <div className="Container">
                <div className="form">
                    <h2>Đăng nhập</h2>
                    <form action="">
                        <div className="inputBox">
                            <input type="text" placeholder="Tài khoản"></input>
                            
                        </div>
                        <div className="inputBox">
                            <input 
                            type="text" 
                            placeholder="Mật khẩu"
                            ></input>
                        </div>
                        <div className="inputBox">
                            <input 
                            type="submit"
                            value="Đăng nhập"
                            onClick={(e) => navi("/home")}
                            ></input>
                        </div>
                        <div className="suport_cl">
                            <a href="" className="sign_in">Đăng ký</a>
                            <a href="" className="forget">Quên mật khẩu?</a>
                        </div>
                        </form>
                    <div className="or">
                        <div className="line_left"></div>
                        <span className="text_mid">HOẶC</span>
                        <div className="line_right"></div>
                    </div>
                    <div className="lk">
                        <button className="boximg bt_style pd">
                            <div className="box_img">
                                <div className="_1a550J social-white-background social-white-fb-blue-png"></div>
                            </div>
                            <div>Facebook</div>
                        </button>
                        <button className="boximg bt_style pd">
                            <div className="box_img">
                                <div className="_1a550J social-white-background social-white-google-png"></div>
                            </div>
                            <div>Google</div>
                        </button>
                        <button className="boximg bt_style pd">
                            <div className="box_img">
                                <div className="_1a550J social-white-background social-white-apple-black-png"></div>
                            </div>
                            <div>Apple</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login