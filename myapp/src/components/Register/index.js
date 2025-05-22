import {useState } from 'react';
import { Link,useNavigate }  from "react-router-dom";
import axios from 'axios'
import './index.css'
import { FaTwitter ,FaFacebookF ,FaInstagram ,FaTelegram ,FaGooglePlusG,FaAmazon    } from "react-icons/fa6";

const Signup = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const updateUsername = (event) => {
       setUsername(event.target.value)
    }
    
    const updateEmail = event => {
       setEmail(event.target.value)
    }

    const updatePassword = event => {
       setPassword(event.target.value)

    }

    const handleSubmit  =  event => {
    
        event.preventDefault()
        axios.post('http://localhost:3001/register',{username,email,password})
        .then(result => {console.log(result)
            if(result.status === 200){
                alert('User Created')
                navigate('/login')
            }
            else{
                alert('User Not Created')
            }
        }
    )
        .catch(err => console.log(err))
    }


    
        return(
            <div className='register-route'>
            <div className='register'>
                <div className='register-left'>
                    <div className='logo-container'>
                        <FaAmazon className='logo' />
                        <h1>Amazon</h1>
                    </div>
                    <div className='register-left-content'>
                        <h1>Don't have an account?</h1>
                        <p>Register to access all the features of our service.Manage your business in one place.It's free!</p>
                         <div className='icon-container'>
                            <FaTwitter className='icon'/><FaFacebookF className='icon' /><FaInstagram className='icon' /><FaTelegram className='icon' /><FaGooglePlusG className='icon' />
                        </div>
                    </div>
      
                </div>
                <div className='register-container'>
                <h1 className='register-heading'>New Register</h1>
                <form onSubmit={handleSubmit} className='register-form'>
                    <div className='input-container'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' placeholder='USERNAME' onChange={updateUsername}/> 
                    </div>
                    <div className='input-container'> 
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='EMAIL'  onChange={updateEmail}/> 
                    </div>
                    <div className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='PASSWORD'  onChange={updatePassword}/> 
                    </div>
                    <button type='submit' className='submit'>Register</button>
                </form>
                <div className='redirect-container'>

                    <p className='para'>Already Have an Account</p>
                    <Link to='/login'>
                    <p  className='redirect'>Click here</p>        
                    </Link>
                </div>
            </div>
            </div>
            </div>
        )
    }


export default Signup;
