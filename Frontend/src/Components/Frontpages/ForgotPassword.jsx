import React, { useState } from 'react';
/*import logo from "../images/logo.png";
import bg from '../images/bg.png';
import dog1 from '../assets/dog1.jpg';
import newdog from '../images/newdog.jpg';
*/
import axios from 'axios';
import pet_connect from '../../images/pet_connect.png';
import { useHistory } from 'react-router';

function Firstpage(props) {
    const history=useHistory();
    const [email, setemail] = useState("");
    const [answer, setanswer] = useState("");
    const [password, setpassword] = useState("");
    const [conpassword, setconpassword] = useState("");


    const onSubmitHandler= async(e)=>{
        e.preventDefault();
        if(password===conpassword){
            console.log("here");
            console.log({email,answer,password});
            const res = await axios.post("http://localhost:8080/api/unauthuser/forgotpassword",{email,answer,password});
            props.history.push("/login");
            console.log(res.error);
        }
    }


    return (


        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-12 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        <div class="text-center mb-2 mt-2">

                            <img src={pet_connect} width="350px" />
                        </div>
                        <h4 class="text-center mb-4">
                           Reset Password
					</h4>
                        <form>

                            <div class="text-left ">
                             
                                <h3> What is your Favorite Food? </h3>
						
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="email" name="email" placeholder="email" required 
                                onChange={e => setemail(e.target.value)}
                                />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="answer" placeholder="Answer" required 
                                onChange={e => setanswer(e.target.value)}
                                />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="password" placeholder="Password" required 
                                onChange={e => setpassword(e.target.value)}
                                />
                            </div>

                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="password" name="conpassword" placeholder=" Confirm Password" required 
                                onChange={e => setconpassword(e.target.value)}
                                />
                            </div>

                            <div class="mb-3 d-flex align-items-center">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cb1" />
                                    
                                </div>
                            </div>

                            <div class="mb-5">
                                <button type="submit" class="btn btn-block" onClick={onSubmitHandler}>
                                   Reset Password
							</button>
                            </div>

                            

                            
                            <div class="row mb-3">
                               
                            </div>

                           
                        </form>
                    </div>
                </div>

               
            </div>
        </div>


    )
}

export default Firstpage;