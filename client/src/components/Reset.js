import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Reset  = ()=>{
    const navigate = useNavigate()
    const [email , sendEmail] = useState('');
    const resetUser = async (e) => {
        e.preventDefault();
      try{
        const res = await fetch('/reset-password',{
          method : "Put",
          headers : {
            "Content-Type" : "application/json" ,
            "Accept" : "application/json"
          }, body:JSON.stringify({
            email
          })
    
        });
      
    
        const data = await res.json();
        
    
        if(res.status === 400 || !data ){
          window.alert("SOME PROBLEM IS THERE ");
        } else{
          window.alert("LINK HAS BEEN SUCCESSFULLY SEND TO YOUR EMAIL ID ");
          navigate('/login');
        }
      }catch(error){
          console.log(error)
      }
    }
   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>ENTER EMAIL ID TO SEND THE RESET LINK </h2>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>sendEmail(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={resetUser}
            >
               FORGOT PASSWORD 
            </button>
            
    
        </div>
      </div>
   )
}

export default Reset
