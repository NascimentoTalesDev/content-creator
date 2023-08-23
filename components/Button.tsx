import styled from "styled-components";

interface ButtonProps{
    margin: string,
    padding: boolean,
}

const Button = styled.input<ButtonProps>`
    background-color: green;
    width: 100px;
    margin: auto;
    color: #FFF;
`

export default Button; 