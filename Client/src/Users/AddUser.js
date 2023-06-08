import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate()

    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [pincode, setpincode] = useState("")
    const [country, setcountry] = useState("")
    const [score, setscore] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/api/v1/adduser", {
            name: name,
            address: address,
            city:city,
            country:country,
            pincode:pincode,
            score:score


        }).then(function (response) {
            console.log(response);
        });
        navigate('/');
    };
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-lable'>
                             Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter your  Name'
                                name="Name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            ></input>


                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Address' className='form-lable'>
                                Address
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder='Enter your Address'
                                name="address"
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}>

                            </input>

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='city' className='form-lable'>
                                city
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder='Enter your city'
                                name="city"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}>

                            </input>

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Country' className='form-lable'>
                                Country
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder='Enter your country'
                                name="country"
                                value={country}
                                onChange={(e) => setcountry(e.target.value)}>

                            </input>

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='pincode' className='form-lable'>
                                pincode
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder='Enter your pincode'
                                name="pincode"
                                value={pincode}
                                onChange={(e) => setpincode(e.target.value)}>

                            </input>

                        </div>
                        <div className='mb-3'>
                            <label htmlFor='score' className='form-lable'>
                                score
                            </label>
                            <input type={"text"}
                                className="form-control"
                                placeholder='Enter your score'
                                name="score(2400 max)"
                                value={score}
                                onChange={(e) => setscore(e.target.value)}>

                            </input>

                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/">Cancle</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
