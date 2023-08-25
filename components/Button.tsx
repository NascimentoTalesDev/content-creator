import styled from "styled-components";

interface ButtonProps{
    margin: string,
    padding: boolean,
}

const Button = styled.input<ButtonProps>`
    background-color: green;
    margin: auto;
    width: 100%;
    padding: 5px;
    color: #FFF;
    cursor: pointer;
    &&:hover{
        background-color: #008000eb;
    }
`

export default Button; 