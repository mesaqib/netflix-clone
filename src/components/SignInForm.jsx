import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from './Footer';

function SignInForm() {
  return (
    <div>
      <div className="box">
        <form action="">
          <h1>Sign In</h1> <br />
          <div className="input">
            <input type="email" name="email" placeholder='Email or phone number' />
            <input type="password" name='password' placeholder='Password' />
          </div>

          <button>
            <a href="/home">Sign in</a>
          </button>

          <div className="remember-me">
            <div>
              <input type="checkbox" name="check" />
              <label for="check"> Remember me</label>
            </div>
            <p>Need help?</p>
          </div>

        </form>

        <div className="fb">
          <FacebookIcon className='fb-icon' />
          <p>Log in with Facebook</p>
        </div>
        <br />
        <div className="signup">
          <p>New to Netflix? <b>Sign up now</b></p>
          <p className='p'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a> </p>
        </div>
        <br /><br />



      </div>

      <Footer className="footersignin" />


    </div>
  )
}

export default SignInForm