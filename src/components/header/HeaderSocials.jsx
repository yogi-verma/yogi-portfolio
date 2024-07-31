
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/yogesh-verma-8b391b1b3/" target="_blank"><BsLinkedin /></a>

            <a href="https://github.com/Yogesh-Verma" target="_blank"><FaGithub /></a>

            <a href="https://instagram.com/VermaYogesh" target="_blank"><FaInstagram /></a>

        </div>
    )
}

export default HeaderSocials