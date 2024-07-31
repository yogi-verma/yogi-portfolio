import React from 'react'
import './footer.css'    
import {FaFacebookF} from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            
            <a href="#" className="footer__logo">YV</a>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://linkedin.com"><FaLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>Made with 💙  by Yogesh Verma</small>
            </div>
        </footer>
    )
}

export default Footer