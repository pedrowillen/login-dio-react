import styled from "styled-components";

export const FormContainer = styled.div`
    width: 400px;
    color: #fff;

    h2 {
        font-size: 32px;
    }

    p {
        font-size: 18px;
        margin: 15px 0 10px 0;
    }

    hr {
        width: 250px;
        border: none;
        border-top: 1px solid #ffffffb9;
        margin-top: 5px;
    }

    span {
        font-weight: bold;
    }

    span strong {
        color: #23DD7A;
        text-decoration: none;
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 30px;
    

    img {
        width: 20px;
        height: 20px;
    }

`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    font-size: 18px;
    color: #fff;
    margin-left: 10px;
    padding: 5px;
`

export const ButtonContainer = styled.div`
    width: 250px;
    box-sizing: border-box;
    margin: 30px 0;
    text-align: center;
    border-radius: 30px;
    border: 2px solid #e4105d;
    
    button {
        font-size: 18px;
        width: 100%;
        background-color: #E4105D;
        color: #fff;
        padding: 5px 0;
        border-radius: 20px;
        border: 5px solid #1E192C;
        cursor: pointer;
        ;
    }
`