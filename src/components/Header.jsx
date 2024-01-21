import './Header.css'
import logo from '../assets/img/logo.png'

export default function Header(){
    return (
        <header>
            <img src={logo} alt='TV Icon'/>
            <p>TV Shows API</p>
        </header>
    )
}