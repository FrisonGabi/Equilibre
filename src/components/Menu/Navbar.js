import styled from "styled-components"
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from "react-icons/fa"
import {Link, animateScroll} from "react-scroll"

//import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Header = styled.header`
    position:fixed;
    width:100%;
    top: 0;
    z-index:100;
    color:#fff;
    text-decoration:none;
    font-size:19px;
    letter-spacing: 1px;
`

const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:end;
    height:100px;
    background-color:#3F9C94;
    @media (max-width:820px) {
        display:none;
    }
    
`

const Ul = styled.ul`
   margin-right:80px;

`
const Li = styled.li`
    display:inline-block;
    margin: 0 30px;
    position:relative;
    list-style:none;
    &>Span {
        cursor: pointer;
    }

    &:before {
        content:"";
        height:3px;
        width:0;
        background-color: rgb(0,118,110);
        position:absolute;
        left:0;
        bottom: -12px;
        transition: 0.5s ease-out;
    }
    &:hover:before {
        width:100%;
        
    }

`
const Span = styled.span`


`

const NavM = styled.nav`
    background-color:rgb(52,179,161);
    width:100%;
    position:relative;
    z-index:99999;
    height: ${({menu}) => (menu ? "50vh" : "0")};
    overflow:hidden;
    transition: height 0.3s ease-in;
    

    @media (min-width:820px) {
        display:none;
    }
    @media (max-width:340px) {
        height: ${({menu}) => (menu ? "60vh" : "0")};
        
    }
`
const UlM = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:70px;
    margin-top:50px;
    height:100%;
    list-style:none;
 
`
const LiM = styled.li`
    &>Span {
        cursor: pointer;
    }
    
`

const I = styled.div`
    background-color:rgb(0,118,110);
    padding:10px;
    font-size:30px;
    display:flex;
    justify-content:end;
    

    & > i {      
        width:30px;
        height:30px; 
    }

    @media (min-width:820px) {
        display:none;
    }
`

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return(
        <Header > 
            <Nav >                
                <Ul>
                    <Li>
                        <Span onClick={() => animateScroll.scrollToTop()}>
                            Home
                        </Span>
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
            </Nav>
            <I>            
                <i>
                    {
                    menu ? 
                    <FaTimes onClick={() => setMenu(!menu)}/>
                    :
                    <FaBars onClick={() => setMenu(!menu)}/>
                    }
               </i>   
            </I>

           {/*{menu ? disableBodyScroll(document): enableBodyScroll(document)} */}      
            
           <NavM menu={menu} >                
                <UlM>
                    <LiM>
                        <Span onClick={() => animateScroll.scrollToTop()}>
                            Home
                        </Span>
                    </LiM>
                    <LiM>
                        <span>
                        <Link to="nosotras" spy={true} smooth={true} offset={50} duration={500}>Nosotras</Link>
                        </span>
                    </LiM>
                    <LiM>
                        <span>
                        <Link to="servicios" spy={true} smooth={true} offset={50} duration={500}>Servicios</Link>
                        </span>
                    </LiM>
                    <LiM>
                        <span>
                        <Link to="contacto" spy={true} smooth={true} offset={50} duration={500}>Contacto</Link>
                        </span>
                    </LiM>
                </UlM>
            </NavM>
            
        </Header>    
 
    )
}

export default Navbar