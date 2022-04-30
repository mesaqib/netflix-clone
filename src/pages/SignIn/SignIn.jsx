import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../assets/images/logo.png';
import LanguageButton from '../../components/LanguageButton';
import SignInForm from '../../components/SignInForm';

function SignIn() {
    return (
        <div>
            <div className="signin-page">
                <Navbar
                    img={<img src={Logo} />}
                />

                <SignInForm />


            </div>



        </div>
    )
}

export default SignIn