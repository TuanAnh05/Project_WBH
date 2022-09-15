import React, { useEffect, useState } from "react";
import "../Style/signin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
    const navi = useNavigate();
    const [register, setRegister] = useState({
        username: "",
        password: "",
        fullname: "",
    });

    const { username, password, fullname } = register;

    const onChangeValue = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };

    const registerUser = async (e) => {
        e.preventDefault();
        const result = await axios.post(
            "http://localhost:8080/api/demo/register",
            register
        );
        if (result.data.length > 0) {
            navi("/home");
        }
    };

    console.log(register);
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
                        <h2>Đăng kí</h2>
                        <form action=''>
                            <div className='inputBox'>
                                <input
                                    type='text'
                                    placeholder='E-mail'
                                    value={fullname}
                                    name='fullname'
                                    onChange={onChangeValue}
                                ></input>
                            </div>
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
                                    name='password'
                                    value={password}
                                    onChange={onChangeValue}
                                ></input>
                            </div>
                            <div className='inputBox' onClick={registerUser}>
                                <input type='submit' value='Đăng ký'></input>
                            </div>
                            <div className='suport_cl'>
                                <Link to={"/"} className='sign_in'>
                                    Đăng nhập
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

export default Signin;
