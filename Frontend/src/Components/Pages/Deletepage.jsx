import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function Deletepage(props) {
    const [deletestate, setdeletestate] = useState(false);

    const email = useSelector(state => state.loginState.user.email);

  const ondeleteHandler = async () => {
    console.log(email);
    console.log("In here");
    //const email="chinmayphade84@gmail.com";
    const result = await Axios.delete(`http://localhost:8080/api/unauthuser/delete/${email}`);
    setdeletestate(true);
    console.log(result);
  }

    return (
        <div>
            
            <div class="container rounded bg-white mt-5 mb-5 form-group">

                <div class="row ">

                    <div class="col-md-4 border-right ">
                    </div>
                    <div class="col-md-5 border-right border border-danger text-danger">

                        <div class="p-3 py-5">
                        {!deletestate?(
                        <React.Fragment>   
                            <div class="d-flex justify-content-center align-items-center mb-3">
                                <h3 class="text-center text-dark font-weight-bold">Are you sure do you want to Delete?</h3>
                            </div>

                           
                            <div class="mt-5 text-center"><button class="btn-danger hover profile-button" type="button" onClick={ondeleteHandler}>Delete</button></div>
                          
                         </React.Fragment>):
                        (<React.Fragment>                           
                            <div class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Deleted Successfully</h4>
                                <p1>Aww yeah, User deleted Successfully</p1>         
                            </div>
                             {localStorage.removeItem("user")}   
                            <div className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                            </div>
                            
                        </React.Fragment>)}

                            </div>
                        </div>

                    </div>
                </div>
                

            </div>
    )
}
export default Deletepage;