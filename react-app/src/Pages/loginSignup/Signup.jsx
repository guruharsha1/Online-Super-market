import React, { useState } from 'react'
import { createNewAccount } from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-vector/safe-food-delivery_23-2148573179.jpg?w=996&t=st=1670498303~exp=1670498903~hmac=6edae15e0a7c5835be399501caf26f5f7d4039b6e6289ab897aa48b574d30a85")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signup = () => {
    const userData = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
        phoneNumber: '',
        city: '',
        district: '',
        state: '',
        pincode: '',
        streetAndLandmark: '',
        isAdmin: false,
        wallet: 1000
    }
    const history = useNavigate();


    const [userDetails, setUserDetails] = useState(userData);
    const createAccount = (e) => {
        e.preventDefault();
        console.log(userDetails);
        createNewAccount(userDetails).then(res => {
            if (res.status === 201) {
                console.log(res);
                alert(res.data);
                setUserDetails(userData);
                history('/');
            }
        })

    }

    const inputHandler = (e) => {
        if (e.target.name === 'isAdmin') {
            setUserDetails(data => ({
                ...data,
                [e.target.name]: e.target.checked,
            }))
        }
        else {
            setUserDetails(data => ({
                ...data,
                [e.target.name]: e.target.value
            }))
        }
    }


    return (
        <Container>
        <div className='container col-md-6' style={{ minHeight: "80vh" }}>
            <div className='my-3'><h1 style={{ color: 'blue', fontWeight: 'bold' }}>Create new account</h1></div>
            <form className="row g-3" onSubmit={createAccount}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name='firstName' value={userDetails.firstName} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name='lastName' value={userDetails.lastName} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" name='userName' value={userDetails.userName} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={userDetails.password} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email ID</label>
                    <input type="email" className="form-control" id="email" name='email' value={userDetails.email} onChange={inputHandler} placeholder='email@example.com' />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phoneNumber" className="form-label">Mobile no</label>
                    <input type="number" className="form-control" id="phoneNumber" name='phoneNumber' value={userDetails.phoneNumber} onChange={inputHandler} placeholder='Enter phone number' />
                </div>
                <div className="col-12">
                    <label htmlFor="streetAndLandmark" className="form-label">Street and Landmark</label>
                    <input type="text" className="form-control" id="streetAndLandmark" placeholder="Enter street and landmark" name='streetAndLandmark' value={userDetails.streetAndLandmark} onChange={inputHandler} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name='city' placeholder='Enter city' value={userDetails.city} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="district" className="form-label">District</label>
                    <input type="text" className="form-control" id="district" name='district' placeholder='Enter district' value={userDetails.district} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" id="state" name='state' placeholder='Enter State' value={userDetails.state} onChange={inputHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="pincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="pincode" name='pincode' placeholder='Enter Pincode' value={userDetails.pincode} onChange={inputHandler} />
                </div>
                {/* <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="isAdmin" name='isAdmin' defaultChecked={userDetails.isAdmin} onChange={inputHandler} />
                        <label className="form-check-label" htmlFor="isAdmin">
                            Are you Admin?
                        </label>
                    </div>
                </div> */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>

        </div>
        </Container>
    )
}

export default Signup