import styled from "styled-components";

interface TextAreaProps{
    margin: string,
}

const TextArea = styled.textarea<TextAreaProps>`
    background-color: #CECECE;
    resize: none;
    padding-left: 2px;
    border: 1px solid #CECECE;
    margin: ${props => props.margin ? props.margin : '10px'};
    &&:focus{
        outline: none;
        border: 1px solid #2b2b2b;
    }
`

export default TextArea; 
