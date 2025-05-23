import { useState,useEffect } from "react";
import { Link,useNavigate  } from "react-router-dom";
import Cookies from 'js-cookie'
import axios from 'axios'
import './index.css'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const passwordType = showPassword ? 'text' : 'password'
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/user/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.status === 201) {
                    alert('Login Successful')
                    const token = result.data.token
                Cookies.set('jwt_token',token , {expires:30})
                    navigate('/')
                } else {
                    alert('Login Failed')
                }
            })
            .catch(err => console.log(err))

    }

   useEffect(() => {

            let token = Cookies.get('jwt_token')
            if(token !== undefined){
                navigate('/')
            }
        })


        return(
            <div className="login">
                <div className="login-container">
                <h1 className="login-heading">Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-container">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='EMAIL' onChange={(e)=>setEmail(e.target.value)}/> 
                    </div>
                    <div className="input-container">
                        <label htmlFor='password'>password</label>
                        <input type={passwordType} id='password' placeholder='PASSWORD' onChange={(e) =>setPassword(e.target.value)}/> 
                    </div>
                    <div className="input-container">
                        <input type='checkbox' id='checkbox'  onChange={() =>setShowPassword((prevState => !prevState))}/> 
                        <label htmlFor='checkbox'>password</label>
                    </div>
                    <button type='submit' className="submit">Login</button>
                    <p className="para">Don't Have an Account</p>
                    <Link to='/register'><button type='button' className="redirect">Register</button></Link>
                </form>
            </div>
            </div>
        )
    }


export default Login;