import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    height: 50px;
    padding: 10px 30px;

    ul {
        list-style: none;
        display: flex;
        font-size: 22px;
    }

    li:not(:first-child) {
        margin-left: 20px;
        background: #565656;
        width: 150px;
        text-align: center;
        border-radius: 20px;
    }
`