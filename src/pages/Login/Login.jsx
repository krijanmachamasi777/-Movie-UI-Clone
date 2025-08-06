import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import google from '../../assets/google.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import { login, signup, googleSignIn } from '../../firebase';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Google login failed:", error);
    }
    setLoading(false);
  };

  return (
    loading ? (
      <div className='loading'>
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} className='login-logo' alt="Logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" && (
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name' />
            )}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
            <button onClick={user_auth} className='signIN' type='submit'>{signState}</button>

            <button type="button" className="google-btn" onClick={handleGoogleLogin}>
              <img src={google} alt="Google icon" />
              Sign in with Google
            </button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
