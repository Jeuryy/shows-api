import './Footer.css'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaTwitter   } from "react-icons/fa";
import icon from '../assets/img/icon.png'

export default function Footer(){
    return (
        <div className='footer'>
            <img src={icon} alt='J Logo'/>
            <div className='footer-description'>
                <h4 className='tvmaze'>Developed using   
                    <a href='https://www.tvmaze.com/'
                        target='_blank'
                        rel="noreferrer"> TVMAZE </a>  
                    API for tv shows
                </h4>
            </div>
            <div className="icons">
                <a href='https://www.facebook.com/jeury.dide.794/?locale=es_ES' target='_blank' rel='noreferrer'>
                    <FaFacebook className='facebook icon'/></a>
                <a  href='https://www.linkedin.com/in/jeury-pierre-dide/' target='_blank' rel='noreferrer'>
                    <FaLinkedin className='linkedin icon'/></a>
                <a href='https://www.instagram.com/jeury_pd/' target='_blank' rel='noreferrer'>
                    <FaInstagram className='instagram icon' /></a>
                <a href='https://github.com/Jeuryy' target='_blank' rel='noreferrer'>
                    <FaGithub className='github icon' /></a>
                <a href='https://twitter.com/jeury102002' target='_blank' rel='noreferrer'>
                    <FaTwitter className='twitter icon' /></a>
            </div>
        </div>
    )
}