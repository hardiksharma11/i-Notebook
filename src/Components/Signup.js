import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

  const navigate = useNavigate();

  const signup = async (name, email, password) => {

    const response = await fetch(`https://inotebooks.onrender.com/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token in local storage
      localStorage.setItem('token',json.authToken);
      navigate('/');
      props.showAlert("Successfully Registered",'success')
    }
    else {
      props.showAlert("Invalid credentials",'danger')
    }

  }

  const handleSub = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget.elements;
    signup(formElement.name.value, formElement.email.value, formElement.password.value)
  }

  return (
    <div className="container">
      <form onSubmit={handleSub}>
        <div className="form-group my-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control my-1" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control my-1" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control my-1" id="password" placeholder="Password" />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" className="form-control my-1" id="cpassword" placeholder="Confirm Password" />
        </div>

        <button type="submit" className="btn btn-primary my-2">Submit</button>
      </form>
    </div>
  )
}

export default Signup
