import styled from "styled-components";
import {IoIosArrowDown} from "react-icons/io"
import { useState } from "react"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:5px;
    height:auto;
    color:#eee;
`
const Barra = styled.div`
    width:100%;
    height:60px;
    background-color:rgb(0,118,110);
    display:flex;
    align-items:center;
    justify-content:space-between;
    &>span {
        margin-right:15px;
    }
    &>p {
        margin-left:15px;
    }
    &>span:hover {
        cursor: pointer;
    }
    
`
const Contenido = styled.div`
    overflow:hidden;
    max-height: ${({show}) => (show ? "3000px" : "0vh")};
    background-color:rgb(52,179,161);
    transition: max-height 0.5s ease-in-out;
    
    &>p {
        font-size:20px;
        padding:0 20px;
        line-height:22px;
        height:auto;
    }
    
`

const Pregunta = ({pregunta,respuesta, respuesta2}) => {
    const [show, setShow] = useState(false);
    return(
        <Container>
            <Barra>
                <p>{pregunta}</p>
                <span onClick={() => setShow(!show)}><IoIosArrowDown /></span>
            </Barra>
            <Contenido show={show}> 
                <p>{respuesta}</p>
                <p>{respuesta2}</p>
            </Contenido>
        </Container>
    )
}

export default Pregunta