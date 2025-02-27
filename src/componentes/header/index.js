import Icones from '../icones';
import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <Icones />
        </HeaderContainer>
    )
}

export default Header;