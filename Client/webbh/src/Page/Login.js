import React, { useState } from "react";
import "../Style/login.css";
import { Link, useNavigate } from "react-router-dom";
import styles from "../App.css";
import axios from "axios";

const Login = () => {
    const navi = useNavigate();
    const [formLogin, setFormLogin] = useState({
        username: "",
        password: "",
    });

    const { username, password } = formLogin;

    const onChangeValue = (e) => {
        setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
    };

    const loginUser = async (e) => {
        e.preventDefault();
        const result = await axios.post(
            "http://localhost:8080/api/demo/login",
            formLogin
        );
        console.log(result);
        if (result.data.state === true) {
            navi("/home");
        }
    };
    return (
        <div className='from_login'>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='box'>
                <div className='box--square'></div>
                <div className='box--square'></div>
                <div className='box--square'></div>
                <div className='box--square'></div>
                <div className='Container'>
                    <div className='form'>
                        <h2>Đăng nhập</h2>
                        <form action=''>
                            <div className='inputBox'>
                                <input
                                    type='text'
                                    placeholder='Tài khoản'
                                    value={username}
                                    name='username'
                                    onChange={onChangeValue}
                                ></input>
                            </div>
                            <div className='inputBox'>
                                <input
                                    type='text'
                                    placeholder='Mật khẩu'
                                    value={password}
                                    name='password'
                                    onChange={onChangeValue}
                                ></input>
                            </div>
                            <div className='inputBox'>
                                <input
                                    type='submit'
                                    value='Đăng nhập'
                                    onClick={loginUser}
                                ></input>
                            </div>
                            <div className='suport_cl'>
                                <Link to={"/signin"} className='sign_in'>
                                    Đăng ký
                                </Link>
                                <Link to={""} className='forget'>
                                    Quên mật khẩu?
                                </Link>
                            </div>
                        </form>
                        <div className='or'>
                            <div className='line_left'></div>
                            <span className='text_mid'>HOẶC</span>
                            <div className='line_right'></div>
                        </div>
                        <div className='lk'>
                            <button className='boximg bt_style pd'>
                                <div className='box_img'>
                                    <div className='_1a550J social-white-background social-white-fb-blue-png'></div>
                                </div>
                                <div>Facebook</div>
                            </button>
                            <button className='boximg bt_style pd'>
                                <div className='box_img'>
                                    <div className='_1a550J social-white-background social-white-google-png'></div>
                                </div>
                                <div>Google</div>
                            </button>
                            <button className='boximg bt_style pd'>
                                <div className='box_img'>
                                    <div className='_1a550J social-white-background social-white-apple-black-png'></div>
                                </div>
                                <div>Apple</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
