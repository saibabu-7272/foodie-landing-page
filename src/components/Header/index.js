import './index.css';
import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";

const Header = () => (
    <header className='header'>
        <div className='logo'>
            <h1>Foodie</h1>
        </div>
        
        <nav className='navbar'>
            <a className='link' href="#home">Home</a>
            <a className='link' href="#recipes">Recipes</a>
            <a className='link' href="#blog">Blog</a>
            <a className='link' href="#contact">Contact</a>  
            <a className='link' href="#about">About Us</a>
        </nav>

        <nav className='social-media'>
            <i><FaFacebookF /></i>
            <i><FaTwitter /></i>
            <i><FaInstagram /></i>

        </nav>
    </header>
)

export default Header;