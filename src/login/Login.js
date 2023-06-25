import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState(" ")
    const [psw, setPsw] = useState(" ")

    let navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const info = {
            email,
            password: psw

        }

        try {
            const result = await axios.post("http://localhost:5000/signIn", info)
            alert(result.data.message)
            localStorage.setItem("userName", result.data.uname);
            navigate('/home')
        }
        catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={''} style={{ color: 'powderblue' }}>
                            <i class="fa-solid fa-user-plus"></i>
                        </Link>
                        <strong className='ms-4 fs-6 me-5'>team Fesa </strong>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className="form-container">
                <p className="title">Login</p>

                <form className="form" >
                    <div className="input-group1">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name="username"
                            id="userName"
                            placeholder=""
                        />
                    </div>
                    <div className="input-group1">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPsw(e.target.value)}
                            type="text"
                            name="password"
                            id="password"
                            placeholder=""
                        />
                        <div className="forgot">
                            <a href='#' rel="noopener noreferrer" >Forgot Password ?</a>
                        </div>
                    </div>
                    <button onClick={(e) => login(e)} className="sign">Sign in</button>
                </form>

                <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="/signUp" className="">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login