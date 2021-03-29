import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import SideBar from './SideBar';
import Posts from './Posts'
import { useSelector } from 'react-redux';

function Profile(props) {

//const [userSignIn, setuserSignIn] = useState(false);
   const {userSignIn} = useSelector(state => state.loginState)
//    const data=localStorage.getItem("user") ? localStorage.getItem("user") : null

/*
useEffect(() => {
      if(data!=null){
          setuserSignIn(true);
      }
      else{
          setuserSignIn(false);
      }
    }, [])
*/

    return (
        <div>
         {userSignIn?(
         <React.Fragment>       
        <NavBar/>
        <div className="facebook">
            <SideBar />
            <Posts />
        </div>
        </React.Fragment>):(
            <React.Fragment>
                {props.history.push("/login")}
            </React.Fragment>
        )}

        </div>
    )
}

export default Profile
