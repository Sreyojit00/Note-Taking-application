import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "",email: "", password: "",cpassword:""})
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email,password}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");
            props.showAlert("Account Created Successfully!","success");

        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='mt-5 mb-5 my-5'>
            <h2 className='my-2' >Create an Account Continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="col-4 text=light" >
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name = "name" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="col-4">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="col-4 mb-5">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required />
                    
                </div>
        
                <button type="submit" className="btn btn-success mb-5" >Submit</button>
            </form>
<footer class="bg-body-tertiary text-center text-lg-start">
 <div class="text-center p-3 nb-5">
   © 2023 Copyright:
   iNotebook
 </div>

</footer>
            
        </div>
    )
}

export default Signup