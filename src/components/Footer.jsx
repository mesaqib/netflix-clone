import React from 'react'

import LanguageButton from './LanguageButton';

function Footer() {
    return (
        <div className='footer-section'>
            <div className="f1">
                <p>Questions? Call&nbsp; <a href="tel:+6494461709">000-800-040-1843</a> </p>
            </div> <br />

            <div className="footer-menu">
                <div className="footer-m">
                    <a href="">FAQ</a>
                    <a href="">Investor Relations</a>
                    <a href="">Privacy</a>
                    <a href="">Speed Test</a>
                </div>
                <div className="footer-m">
                    <a href="">Help Centre</a>
                    <a href="">Jobs</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Legal Notices</a>
                </div>
                <div className="footer-m">
                    <a href="">Account</a>
                    <a href="">Ways to Watch</a>
                    <a href="">Corporate Information</a>
                    <a href="">Only on Netflix</a>
                </div>
                <div className="footer-m">
                    <a href="">Media Centre</a>
                    <a href="">Terms of Use</a>
                    <a href="">Contact Us</a>

                </div>
            </div>
            <br />
            <div className="f2">
                <LanguageButton className="languagebtn" />
            </div>
            <br />
            <div className="f3">
                <p>Netflix India</p>
            </div>

        </div>
    )
}

export default Footer