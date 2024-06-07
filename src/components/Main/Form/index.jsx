import { FormContainer, InputContainer, Input, ButtonContainer } from "./styles";
import login from '../../../assets/login.png'
import email from '../../../assets/email.png'
import password from '../../../assets/password.png'

const Form = () => {
    return (
        <FormContainer>
            <h2>Começe agora grátis</h2>
            <p>Crie sua conta e make the change._</p>
            <InputContainer>
                <img src={login} alt="login" />
                <Input type="text" name="fullname" placeholder="Nome completo" />
            </InputContainer>
            <hr />
            <InputContainer>
                <img src={email} alt="email" />
                <Input type="email" name="email" placeholder="E-mail" />
            </InputContainer>
            <hr />
            <InputContainer>
                <img src={password} alt="password" />
                <Input type="password" name="password" placeholder="Password" />
            </InputContainer>
            <hr />
            <ButtonContainer>
                <button>Criar minha conta</button>
            </ButtonContainer>
            <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
            <span>
                Já tenho uma conta. <strong>Fazer login</strong>
            </span>
        </FormContainer>
    );
}

export default Form;