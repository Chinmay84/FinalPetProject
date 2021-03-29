import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function NavBar() {
    
    
    const {userSignIn} = useSelector(state => state.loginState)

    return (
        <div>
            {!userSignIn?(
             <React.Fragment>   
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                    <li className="nav-item">
                         <Link className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Aboutus</Link>
                    </li>
                   
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                                <Link className="dropdown-item" to="/doctore">Doctors</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="dropdown-item" to="/froster">Fosters</Link>
                            </li>
                        
                        </div>

                    </li>
                    
                </ul>
            </nav>
            </React.Fragment>):(<React.Fragment></React.Fragment>)}
        </div>
    )
}
