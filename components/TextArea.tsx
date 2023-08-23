import styled from "styled-components";

interface TextAreaProps{
    margin: string,
}

const TextArea = styled.textarea<TextAreaProps>`
    background-color: red;
    color: white;
    resize: none;
    margin: ${props => props.margin ? props.margin : '10px'};
    &&:focus{
        border: none;
        outline: none;
        background-color: #585858;
    }
`

export default TextArea; 
