import React from 'react'
import {useNavigate} from 'react-router-dom'


const Login = (props) => {
    
    const navigate= useNavigate();

    const login = async (email,password) => {

        const response = await fetch(`https://inotebooks.onrender.com/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({email,password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // Save the auth token in local storage
            localStorage.setItem('token',json.authToken);
            // console.log(localStorage.getItem('token'))
            // console.log(json.authtoken)
            props.showAlert("Successfully logged in",'success')
            navigate('/');
        }
        else{
            // alert("Invalid credentials");
            props.showAlert("Invalid credentials",'danger')
        }

    }

    const handleSub=(e)=>{
        e.preventDefault();
        const formElement=e.currentTarget.elements;
        login(formElement.email.value, formElement.password.value)
    }
    return (
        <div>
            <form onSubmit={handleSub}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
