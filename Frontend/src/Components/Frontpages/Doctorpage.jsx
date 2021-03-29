import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import pet_connect from '../../images/pet_connect.png';
//import newdog from '../images/newdog.jpg';
import vet from '../../images/vet.png';  
import RegisterDocAction from '../../Redux/Action/RegDoctorAction';
function Doctorpage() {
const [userState, setuserState] = useState({});

const history=useHistory();
const dispatch=useDispatch();
//const userId=useSelector(state=>state.userId);

const onClickHandler=(e)=>{
    e.preventDefault();
    // setuserState({...userState,...{userId}})
    setuserState(userState);
    console.log(userState);
    dispatch(RegisterDocAction(userState,history));
    
}

    return (

        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-7 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box">
                        <div class="text-center mb-3 mt-5">

                            <img src={pet_connect} class="img-fluid img-responsive" width="350px" />
                        </div>
                        <h4 class="text-center mb-4">
                           Doctor Info
					</h4>
                        <form>
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Qualification" tabindex="10" required 
                                onChange={
                                    (e)=>{
                                        const qualification=e.target.value;
                                        setuserState({...userState,...{qualification}})}
                                }
                                />
                            </div>
                            <div class="form-input">
                                <span><i class="fa fa-key"></i></span>
                                <input type="text" name="" placeholder="Experience" required 
                                onChange={
                                    (e)=>{
                                        const experience=e.target.value;
                                        setuserState({...userState,...{experience}})}
                                }
                                />
                            </div>
                            <div class="form-input">
                                <span><i class="fas fa-user-alt"></i></span>
                                <input type="text" name="" placeholder="Office Address" tabindex="10" required 
                                onChange={
                                    (e)=>{
                                        const officeAddress=e.target.value;
                                        setuserState({...userState,...{officeAddress}})}
                                }
                                />
                            </div>

                            

                            <div class="mb-5">
                                <button type="submit" class="btn btn-block" onClick={onClickHandler}>
                                    Submit
							</button>
                            </div>

                            
                        </form>
                    </div>
                </div>

                <div class="col-lg-5 form-block px-4">
                    <img src={vet} width="500px" />
                </div>


            </div>
        </div>
        
    )
}

export default Doctorpage;