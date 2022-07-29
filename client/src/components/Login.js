import React , {useState} from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  
  const navigate = useNavigate();

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin',{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"  
      }, body:JSON.stringify({
        email,
        password

      })

    });

    const data = await res.json();

    if(res.status === 400 || !data ){
      window.alert("INVALID CREDENTIALS ");
    } else{
      window.alert("LOGIN SUCCESSFUL");
      navigate('/');
    }
}
 
 
  return (
    <>
     <section className = "sign-in">
      <div className = "container mt-5">
      <div className = "signin-content">
      </div>
          <figure>

          </figure>
          <NavLink to = "/signup" className = "signup-image-link"> CREATE AN ACCOUNT <br></br></NavLink> 
          <NavLink to = "/reset" >FORGOT PASSWORD</NavLink>
        </div>
        <div className = "signin-form">
          <h2 className = "form-title">Login In</h2>
          <form  method = "POST" className = "register-form" id = "register-form">
            <div className = "form-group">
              <label htmlFor="email">
              <i class="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input type = "text" name = "email" id = "email" autoComplete = "off" 
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              /> 
            </div>
            <div className = "form-group">
              <label htmlFor="password">
              <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input type = "password" name = "password" id = "password" autoComplete = "off" 
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              />
            </div>
            <div className = "form-group form-button">
              <input type = "submit" name = "signin" id = "signin" className = "form-submit" value = "Log In"
              onClick = {loginUser}
              />

            </div>
          </form>
      </div>
     </section>
    </>
  )
  }
export default Login