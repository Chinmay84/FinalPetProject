import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Userlist() {
    const [users, setusers] = useState([]);
    const user="user";
     const fetchData = async () => {
         const result = await Axios.get(`http://localhost:8080/api/unauthuser/getdocterandfoster/${user}`);
        console.log(result.data);
         setusers(result.data);
    }
    useEffect(() => {

        fetchData();
    }, [])
    return (
        <div>
            <h1>User List</h1>
            <React.Fragment>

                        <div>
                            {users.length > 0 ?
                                <table className=" jumbotron table table-bordered shadow-lg m-5">
                                    <thead>
                                        <tr>

                                            <th>Name</th>
                                            <th>EmailId</th>
                                            <th>City</th>
                                            <th>Pincode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user) => (
                                                <tr key={user.email}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                    <td>{user.address.pincode}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1>No User List is Available</h1>
                            }</div>
                
            </React.Fragment>
        </div>
    )
}
