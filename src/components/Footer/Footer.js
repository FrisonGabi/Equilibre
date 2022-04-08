import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Container = styled.footer`
    margin-top:50px;
    color: #fff;
    font-size:20px;
    background-color: #3F9C94;
    width:100%;
    position:absolute;
    text-align:center;

`

const Nav = styled.div`
    
    width:100%;
    text-align:center;
    padding: 50px 0;
`
const Social = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:15px;
`

const A = styled.a`
    text-decoration:none;
    color: #fff;
    & > i {
        font-size:35px;
        padding:6px;
        margin-inline: 15px;
    }
    &:hover{
            color:#000;
    }
`

const Ul = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:80px;
    @media (max-width:500px) {
        justify-content:space-between;
        gap:0;
    }

`

const Li = styled.li`
    list-style:none;

`
const Copy = styled.p`
    bottom:0;
`

const Footer = () => {
    return(
        <Container>
            <Nav>
                <Social>
                    <A href="#">
                        <i>
                            <FaFacebook/>
                        </i>
                    </A>
                    <A href="#">
                        <i>
                            <FaInstagram/>
                        </i>
                    </A>
                </Social>
                <Ul>
                    <Li>
                        <A href="#">Inicio</A>
                    </Li>
                    <Li>
                        <A href="#">Nosotras</A>
                    </Li>
                    <Li>
                        <A href="#">Servicios</A>
                    </Li>
                    <Li>
                        <A href="#">Contacto</A>
                    </Li>
                </Ul>
                
            </Nav>
            <Copy>CopyRight &copy; 2022 Gabi. All Rigths Reserved</Copy>
        </Container>
    )
}

export default Footer