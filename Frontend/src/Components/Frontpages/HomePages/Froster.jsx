import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Froster() {
    const [frosters, setFrosters] = useState([]);
    const foster = "foster";
    const fetchData = async () => {
        const result = await Axios.get(`http://localhost:8080/api/unauthuser/getdocterandfoster/${foster}`);
        console.log(result.data);
        setFrosters(result.data);
    }
    useEffect(() => {

        fetchData();
    }, [])
    return (
        <div>
            <h1>Foster List</h1>
            <React.Fragment>

                <div>
                    {frosters.length > 0 ?
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
                                    frosters.map((froster) => (
                                        <tr key={froster.email}>
                                            <td>{froster.name}</td>
                                            <td>{froster.email}</td>
                                            <td>{froster.mobileNo}</td>
                                            <td>{froster.address.pincode}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        : <h1>No Froster List is Available</h1>
                    }</div>

            </React.Fragment>
        </div>
    )
}
