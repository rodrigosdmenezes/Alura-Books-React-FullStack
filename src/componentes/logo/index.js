import './logo.css';
import logo from '../../img/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='img-logo' 
                className='logo-img'>

            </img>
            <p>Alura Books</p>
        </div>
    )
}

export default Logo;