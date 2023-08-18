import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div>
        <body className="container">
  <div className="login-container">
    <div className="login-content">
      <h1 className="welcome-text">Welcome Back</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" className="input-field"></input>
        <input type="password" placeholder="Password" className="input-field"></input>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  </div>
</body>
    </div>
  )
}

export default Login