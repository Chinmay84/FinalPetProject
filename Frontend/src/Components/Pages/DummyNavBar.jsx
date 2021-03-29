import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAuthAction } from '../../Redux/Action/AuthAction'
export default function NavBar(props) {
    const userSignIn = useSelector(state => state.userSignIn);
    const { auth, logout } = props;
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    {!userSignIn ? (

                        <React.Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </React.Fragment>) : (
                        <React.Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#logout" onClick={() => { dispatch(LogoutAuthAction()) }}>LogOut</Link>
                            </li>
                        </React.Fragment>)}
                </ul>
            </nav>


        </div>
    )
}
/*
const mapStateToProps = (state) => {
    return {
        auth: state,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => {
            dispatch(LogoutAuthAction(history));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

 */


