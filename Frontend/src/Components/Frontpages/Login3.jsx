import React, { useState } from 'react';
//import logo from "../images/logo.png";
//import bg from '../images/bg.png';
//import dog1 from '../assets/dog1.jpg';
import newdog from '../../images/newdog.jpg';
import Posts from '../Pages/Posts'
import ForgotPassword from './ForgotPassword'

import pet_connect from '../../images/pet_connect.png';
import { useDispatch, useSelector } from 'react-redux';
//import { Redirect, useHistory } from 'react-router';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { LoginAction } from '../../Redux/Action/LoginAction';

function Login3(props) {


    const history = useHistory();
    const { userSignIn } = useSelector(state => state.loginState);
    const [loginState, setloginState] = useState({})
    const dispatch = useDispatch();
    /*  useEffect(() => {
         if (userSignIn) {
             props.history.push("/profile/home");
         }
     }, [userSignIn]); */
    const loginClickHandler = (e) => {
        console.log(loginState)
        e.preventDefault();
        dispatch(LoginAction(loginState));
        /* if(userSignIn){            
            history.push("/profile/home");
        } */
        //      document.location.href("/profile/home");

        //         window.location.href("/profile/home")

    }

    return (


        <div class="container-fluid">
            {userSignIn ? <Redirect to="/profile/home" /> : ""}
            <div class="row">
                <div class="col-lg-7 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        <div class="text-center mb-3 mt-5">

                            <img src={pet_connect} width="350px" />
                        </div>
                        <h4 class="text-center mb-4">
                            Login into account
					</h4>
                        <form>
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Username" tabindex="10" required
                                    onChange={
                                        (e) => {
                                            const email = e.target.value;
                                            setloginState({ ...loginState, ...{ email } })
                                        }
                                    }
                                />
                            </div>
                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="" placeholder="Password" required
                                    onChange={
                                        (e) => {
                                            const password = e.target.value;
                                            setloginState({ ...loginState, ...{ password } })
                                        }
                                    }

                                />
                            </div>

                            <div class="mb-3 d-flex align-items-center">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cb1" />
                                    <label class="custom-control-label" for="cb1">Remember me</label>
                                </div>
                            </div>

                            <div class="mb-3">
                                <button type="submit" class="btn btn-block" onClick={loginClickHandler}>
                                    Login
							</button>
                            </div>

                            <div class="text-right ">
                                <div className="nav-item">
                                    <Link className="nav-link" to="/forgotpassword">Forgot Password</Link>
                                </div>
                            </div>

                            <div class="text-center mb-3">
                                or login with
						</div>

                            <div class="row mb-3">
                                <div class="col-4">
                                    <a href="" class="btn btn-block btn-social btn-facebook">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </div>

                                <div class="col-4">
                                    <a href="" class="btn btn-block btn-social btn-google">
                                        <i class="fa fa-google"></i>
                                    </a>
                                </div>

                                <div class="col-4">
                                    <a href="" class="btn btn-block btn-social btn-twitter">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="text-center mb-5">
                                Don't have an account?
                            <Link className="nav-link" to="/register">Register here</Link>
                                <a class="register-link" href="register.html">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-5 form-block px-4">
                    <img src={newdog} width="500px" />
                </div>


            </div>
        </div>


    )
}

export default Login3;