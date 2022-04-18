import styled from "styled-components";
import { Link } from "react-scroll";

const ContainerNos = styled.section`
    display:flex;
    justify-content:center;
    align-self: center;
    width: 80%;
    margin:auto;
    margin-top:70px;
    border-radius:10px;
    gap:50px;
    @media (max-width:800px) {
        flex-direction:column-reverse;
        width:80%;
        height:800px;
        gap:20px;
    }
    @media (max-width:340px) {
        flex-direction:column-reverse;
        width:100%;
        height:800px;
        gap:20px;
    }
`

const Info = styled.div`
    display:flex;
    align-items:center;
    width:60%;
    line-height:35px;
    font-size:20px;
    @media (max-width:800px) {
        width:100%;
        height:50%;
        font-size:15px;
        line-height:22px;
    }
    @media (max-width:340px) {
        width:100%;
        height:50%;
        font-size:15px;
        line-height:22px;
    }
`

const Foto = styled.div`
    width:40%;
    background-image: url(${(props) => "images/NatiEmi.jpg"});
    opacity:0.9;
    background-size:cover;
    @media (max-width:800px) {
        width:100%;
        height:50%;
        
        background-position:cover;
        
    }
    @media (max-width:340px) {
        width:100%;
        height:50%;
        
        background-position:cover;
        
    }
    @media (min-width:801px) and (max-width:1499px) {
        background-position:50%;
    }
    @media (min-width:1500px) {
        background-position:cover;
    }
`

const P = styled.p` 
    padding:25px;
    &>span {
        cursor: pointer;
        color:#3F9C94;
        text-decoration:underline ; 
    }
    
`


const Nosotras = () => {
    return (
        
            <ContainerNos id="nosotras">
                <Info>
                    <P>
                        Somos Nati y Emi, ambas Lic. en Nutrición egresadas de la UNC.<br/>
                        Queremos ayudarlos a dejar de lado esas dietas locas y restrictivas que no pueden sostener en el tiempo y que les generan tanta frustración, poder brindarles a cada uno de ustedes las herramientas necesarias para que puedan lograr cambios en sus hábitos alimentarios, buscando una alimentación saludable y equilibrada sin privarse de aquellos alimentos que tanto les gustan.<br/>
                        Quienes quieran comenzar a sumar más habitos saludables a su vida sin dejar de disfrutar son bienvenidos!<br/>
                        <span>
                        <Link to="contacto" spy={true} smooth={true} offset={50} duration={500}>Saca tu turno!</Link>
                        </span>
                    </P>
                </Info>
                <Foto/>            
            </ContainerNos>

        
    )
}

export default Nosotras