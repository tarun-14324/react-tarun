
import React from 'react'
import './home.css'
const Login = () => {
  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                
                <input type="email" 
                       className="form-control" 
                      
                       placeholder="Enter email"
                />
               
                </div>
                <div className="form-group text-left">
                    
                    <input type="password" 
                        className="form-control" 
                        
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                   
                    <input type="password" 
                        className="form-control" 
                       
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="nav-link"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
 
export default Login;