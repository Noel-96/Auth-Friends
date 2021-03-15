import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';


const initialCredentialValue = {
    username: "",
    password: ""
  }


const Login = () => {
const history = useHistory();
const [credentials, setCredentials] = useState(initialCredentialValue);

 

 const handleChange = e => {
   const userCredentials= {...credentials, [e.target.name]: e.target.value}
   setCredentials(userCredentials);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("authToken", res.data.payload);
      history.push("/protected");
    })
    .catch(err => console.log(err));

  };
  
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username} 
              onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password} 
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
        </div>
      )
};

export default Login;