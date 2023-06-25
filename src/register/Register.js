import React, { useState } from 'react'
import './register.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Register = () => {

    const [email, setEmail] = useState(" ")
    const [uname, setUname] = useState(" ")
    const [psw, setPsw] = useState(" ")

    let navigate = useNavigate()


    const register = async (e) => {
        e.preventDefault()
        const data = {
            email,
            uname,
            password: psw,

        }

        try {
            const result = await axios.post('http://localhost:5000/signUp', data)
            alert(result.data.message);
            navigate('/')
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
                <p className="title">Register</p>

                <form className="form">
                    <div className="input-group1">

                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                            type="email" name="email" id="email"
                            placeholder="" />


                        <label htmlFor="username">Username</label>
                        <input onChange={(e) => setUname(e.target.value)}
                            type="text" name="username" id="username"
                            placeholder="" />

                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPsw(e.target.value)}
                            type="text" name="password" id="password"
                            placeholder="" />
                    </div>

                    <button onClick={(e) => register(e)} className="sign">Sign Up</button>
                </form>

                <p className="signup">Already have an account?
                    <a rel="noopener noreferrer" href="/" > Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default Register