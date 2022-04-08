import styled from "styled-components"
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from "react-icons/fa"
//import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Header = styled.header`
    position:fixed;
    width:100%;
    top: 0;
    z-index:100;
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
const A = styled.a`
    color:#fff;
    text-decoration:none;
    font-size:19px;
    letter-spacing: 1px;

    transition: 0.5s ease-out;
    &:hover {
        color:rgb(52,200,200);
    }
`

const NavM = styled.nav`
    background-color:rgb(52,179,161);
    width:100%;
    position:relative;
    z-index:200;
    height: ${({menu}) => (menu ? "50vh" : "0")};
    overflow:hidden;
    transition: height 0.3s ease-in;
    

    @media (min-width:820px) {
        display:none;
    }
    
`
const UlM = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:70px;
    margin-top:50px;
    height:100%;

 
`
const LiM = styled.li`

    list-style:none;
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
        <Header>
            <Nav>                
                <Ul>
                    <Li>
                        <A href="#home">Home</A>
                    </Li>
                    <Li>
                        <A href="#nosotras">Nosotras</A>
                    </Li>
                    <Li>
                        <A href="#servicios">Servicios</A>
                    </Li>
                    <Li>
                        <A href="contacto">Contacto</A>
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
                        <A href="#">Home</A>
                    </LiM>
                    <LiM>
                        <A href="#">Nosotras</A>
                    </LiM>
                    <LiM>
                        <A href="#">Servicios</A>
                    </LiM>
                    <LiM>
                        <A href="contacto">Contacto</A>
                    </LiM>
                </UlM>
            </NavM>
            
        </Header>    
 
    )
}

export default Navbar