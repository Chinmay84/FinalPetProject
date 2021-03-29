import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Doctore() {
    const [doctors, setDoctors] = useState([]);
    const doctor="doctor";
     const fetchData = async () => {
         const result = await Axios.get(`http://localhost:8080/api/unauthuser/getdocterandfoster/${doctor}`);
        console.log(result.data);
         setDoctors(result.data);
    }
    useEffect(() => {

        fetchData();
    }, [])
    return (
        <div>
            <h1>Doctor List</h1>
            <React.Fragment>

                        <div>
                            {doctors.length > 0 ?
                                <table className=" jumbotron table table-bordered shadow-lg m-5">
                                    <thead>
                                        <tr>

                                            <th>Name</th>
                                            <th>EmailId</th>
                                            <th>ContactNo</th>
                                            <th>Pincode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            doctors.map((doctore) => (
                                                <tr key={doctore.email}>
                                                    <td>{doctore.name}</td>
                                                    <td>{doctore.email}</td>
                                                    <td>{doctore.mobileNo}</td>
                                                    <td>{doctore.address.pincode}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                : <h1>No Doctore List is Available</h1>
                            }</div>
                
            </React.Fragment>
        </div>
    )
}
