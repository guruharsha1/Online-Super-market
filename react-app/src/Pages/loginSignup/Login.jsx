import React, { useEffect, useState } from 'react';
import { userLogin, fetchUserData, cartItems } from '../../api/authenticationService';
import { useNavigate } from 'react-router-dom';
import { authenticate, authFailure, authSuccess, userInfoLost, userInfoFetched, cartItemCount } from '../../redux/authActions';
import { useDispatch, useSelector } from 'react-redux'
import './login.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-vector/flat-people-order-food-online-grocery-shopping-from-mobile-application-internet-purchases-with-home-delivery-from-supermarket-store-smartphone-screen-with-buy-button-basket-full-products_88138-856.jpg?w=996&t=st=1670500070~exp=1670500670~hmac=027eee5eb5dbd382b1de8a9bf84ad11da03775770b6acdd9e063e3af2cf35cab")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Login = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    });


    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(authenticate());
        userLogin(loginData).then((response) => {
            if (response.status === 200) {
                dispatch(authSuccess(response.data));
                fetchUserData().then((response) => {
                    const data = response.data;
                    localStorage.setItem("UserData", JSON.stringify(data));
                    dispatch(userInfoFetched(response.data));

                    response.data.roles.forEach(e => {
                        if (e.authority === 'USER') {
                            cartItems(response.data.userId).then(res => {
                                dispatch(cartItemCount(res.data.length));
                            })
                        }
                    })
                    console.log(response.data);
                    history('/home')
                }).catch((e) => {
                    dispatch(userInfoLost());
                    alert("You have to login first...")
                    history('/')
                })
            }
            else {
                dispatch(authFailure('Something Wrong!Please Try Again'));
            }
        }).catch((err) => {
            if (err && err.response) {
                switch (err.response.status) {
                    case 401:
                        console.log("401 status");
                        dispatch(authFailure("Authentication Failed.Bad Credentials"));
                        break;
                    default:
                        dispatch(authFailure('Something Wrong!Please Try Again'));
                }
            }
            else {
                dispatch(authFailure('Something Wrong!Please Try Again'));
            }
        });
        //console.log("Loading again",loading);

    }
    const handleChange = (e) => {
        e.persist();
        setLoginData(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };
    const logOut = () => {
        localStorage.clear();
        dispatch(userInfoLost());
        history('/');
    }
    const signup = () => {
        localStorage.clear();
        dispatch(userInfoLost());
        history('/signup');
    }

    useEffect(() => {
        logOut();
    }, []);

    return (
        <Container>
        <div style={{ minHeight: "80vh" }} className='col-8 mx-auto' >
           
            <form className=" gx-3 gy-2 align-items-center w-100 p-3" onSubmit={handleSubmit} noValidate={false}>

                <div className="col-sm-6 mt-3">
                    <div className="input-group">
                        <div className="input-group-text">Username</div>
                        <input type="text" className="form-control" id="userName" name='userName' value={loginData.userName} onChange={handleChange} placeholder="Enter your username" />
                    </div>
                </div>
                <div className="col-sm-6 mt-3">
                    <div className="input-group">
                        <div className="input-group-text">Password&nbsp;</div>
                        <input type="password" className="form-control" id="password" name='password' value={loginData.password} onChange={handleChange} placeholder="Enter your password" />
                    </div>
                </div>
                <div className="col-auto mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {state.loading && (
                        <span className="ms-2 fw-bold">Loading...</span>
                    )}

                </div>
                <div>New to GroceryStop?  <button className='btn btn-primary' onClick={signup} >Signup</button>
</div>
                
            </form>
        </div>
        </Container>
    );
}

export default Login;