import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {Link, animateScroll} from "react-scroll"

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
    & > span {
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
    margin-bottom:40px;
    gap:80px;
    @media (max-width:500px) {
        flex-direction:column;
        gap:10px;
    }

`

const Li = styled.li`
    list-style:none;
    &>span:hover {
        cursor:pointer;
        color:#000;
    }
    &>span {
        padding:5px;
        cursor:pointer;
    }
`
const Copy = styled.p`
    margin-top:-30px;
    bottom:0;
`

const Footer = () => {
    return(
        <Container>
            <Nav>
                <Social>
                    <A href="https://www.facebook.com/equilibrenutricionbienestar" target="_blank">
                        <span>
                            <FaFacebookSquare/>
                        </span>
                    </A>
                    <A href="https://www.instagram.com/equilibre.nutricion" target="_blank">
                        <span>
                            <FaInstagram/>
                        </span>
                    </A>
                </Social>
                <Ul>
                    <Li>
                        <span onClick={() => animateScroll.scrollToTop()}>
                            Home
                        </span>
                    </Li>
                    <Li>
                        <span>
                        <Link to="nosotras" spy={true} smooth={true} offset={50} duration={500}>Nosotras</Link>
                        </span>
                    </Li>
                    <Li>
                        <span>
                        <Link to="servicios" spy={true} smooth={true} offset={50} duration={500}>Servicios</Link>
                        </span>
                    </Li>
                    <Li>
                        <span>
                        <Link to="contacto" spy={true} smooth={true} offset={50} duration={500}>Contacto</Link>
                        </span>
                    </Li>
                </Ul>
                <Ul>
                    <Li>
                        Duarte Quiros 2178 - Alto Alberdi
                    </Li>
                    <Li>
                        Ituzaingo 791 - Nueva Córdoba
                    </Li>
                    <Li>
                        Tristán Malbran 4177 - Cerro de las rosas
                    </Li>
                </Ul>
                
            </Nav>
            <Copy>CopyRight &copy; 2022 Gabi. All Rigths Reserved</Copy>
        </Container>
    )
}

export default Footer