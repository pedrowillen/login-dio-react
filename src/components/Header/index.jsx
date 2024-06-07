import { HeaderContainer } from './styles';
import logo from '../../assets/logo-dio.png'

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="DIO logo"/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Entrar</li>
                    <li>Cadastrar</li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

export default Header;