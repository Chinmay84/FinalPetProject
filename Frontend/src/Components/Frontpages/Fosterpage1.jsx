import React from "react";
import pet_connect from '../images/pet_connect.png';
import vet from '../images/vet.png';
import foster_logo from '../images/foster_logo.jpg';
import fosterimg from '../images/fosterimg.jpg';
import logo from "../images/logo.png";
function Fosterpage() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 form-block px-4">
                    <div class="col-lg-8 col-md-6 col-sm-8 col-xs-12 form-box ">
                        <div class="text-center mb-3 mt-5">
                            <img src={pet_connect} width="350px" />
                        </div>
                        <h4 class="text-center mb-4">
                            Foster service
					</h4>
                       
                    </div>
                </div>

                <div class="last">
                <div class="col-lg-6 d-none d-lg-block image-container justify-content-center">
                    <div class="card text-center absolute-center">
                        <div class="card-header">
                            Foster Service Discription
                </div>
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <form>
                                <div class="form-input">
                                    <span><i class="fas fa-user-alt"></i></span>
                                    <input type="text" name="" placeholder="Full Name" required />
                                </div>
                                </form>
                            <a href="#" class="btn btn-primary">Submit</a>
                        </div>
                        <div class="card-footer text-muted">
                            
  </div>
                    </div>
                
                    </div>


                    
                </div>
                </div>
            </div>
        

    )
}
export default Fosterpage;

