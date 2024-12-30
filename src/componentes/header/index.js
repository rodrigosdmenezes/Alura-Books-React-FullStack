import './header.css'
import Icones from '../icones';
import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader';

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <Icones />
        </header>
    )
}

export default Header;