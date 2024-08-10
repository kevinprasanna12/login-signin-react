import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Signup = () => {
      const [update , setupdate] = useState({
        name:'',
        email:'',
        password:''
      });

  return (
  <>
      <form action="">
        <div className="body">
            <div className="container">
                <div className="header">
                    <h1>Sign Up</h1>
                </div>
              
                <div className="inputs">
                    <div className="input">
                        <input 
                        value={update.name}  
                        type="text" 
                        placeholder='Username' 
                        required 
                        onChange={e=>{
                          setupdate({
                            name:e.target.value
                          })
                        }}
                      />
                    </div>
                    <div className="input">
                        <input
                        value={update.email} 
                        type="email" 
                        placeholder='Email' 
                        required
                        onChange={e => {
                          setupdate({
                            email:e.target.value
                          })
                        }}
                        />
                    </div>
                    <div className="input">
                        <input
                        value={update.password} 
                        type="password" 
                        placeholder='Password 4-20' 
                        required 
                        onChange={e => {
                          setupdate({
                            password:e.target.value
                          })
                        }}
                        />
                    </div>
                </div>

                <div className="redirect">
                    <p className='direct-login'>If you have a account, <Link to="/" type='submit'>Login</Link> </p>
                    <a href='#' className='direct-login'>forgot password?</a>
                </div>

                <div className="submit-button">
                    <button > Register </button>
                
                </div>


                <p className='or'>or</p>  

                <div className="social">
                  <a href=""><img src="./icons/icons8-google-48.png" alt="google" /></a>
                  <a href=""><img src="./icons/icons8-linked-in-48.png" alt="linked in" /></a>
                  <a href=""><img src="./icons/icons8-microsoft-48.png" alt="microsoft" /></a>
                </div>

            
              </div>

        </div>
    </form>
  </>
)
}

export default Signup
