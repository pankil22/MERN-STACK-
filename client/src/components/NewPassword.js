import React,{useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
const NewPassword  = ()=>{
    const navigate = useNavigate()
    const [newPass , password] = useState("")
    const {resetLink} = useParams()
    const PostData = async (e) => {
        e.preventDefault();
      try{
        const res = await fetch('/new-password',{
          method : "Put",
          headers : {
            "Content-Type" : "application/json" ,
            "Accept" : "application/json"
          }, body:JSON.stringify({
            newPass,
            resetLink
          })
    
        }).then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.error){
            window.alert("SOME PROBLEM IS THERE ");
          }else{
            window.alert("YOUR PASSWORD HAS BEEN CHANGED SUCCESSFULLY");
          navigate('/login');
          }
        })
      }
      catch(err){
          console.log(err)
      }
    }

   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>ENTER NEW PASSWORD </h2>
        
            <input
            type="password"
            placeholder="enter a new password"
            value={newPass}
            onChange={(e)=>password(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={PostData}
            >
               Update password
            </button>
    
        </div>
      </div>
   )
}


export default NewPassword