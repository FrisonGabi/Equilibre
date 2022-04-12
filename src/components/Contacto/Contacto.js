import styled from "styled-components";
import Map from "./Map";

const Container = styled.section`
    width:80%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-top:40px;
    align-items:center;

`
const ContainerCard = styled.div`
    display:flex;
    gap:15px;
    
    flex-wrap:wrap;
    justify-content:center;
    @media (max-width:800px) {
        width:100%;
        
    }
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:top;
    align-items:center;
    width:350px;
    height:500px; 
    background-color:rgba(0,118,110,0.8);
    border-radius:6px;
    color:white;
    box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.4);
    @media (max-width:800px) {
        width:100%;
        
    }
    &>img {
        
        width: 100%;
        height: 250px;
        object-fit:cover;
        border-radius:6px 6px 0 0;
        box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2);
    }
    &>p {
        padding:10px;
        line-height:20px;
        text-align:start;
        height:100px;
    }
`
const Button = styled.a`
    text-decoration:none;
    color: #000;
    width:50%;
    border-radius:6px;
    background-color:white;
    padding:5px;
    text-align:center;
    margin:auto;
    
    &:hover {
        background-color:#ddd;
    }
`

const Contacto = () => {
    return(
        <Container>
            <ContainerCard >
                <Card id="turno">
                    <img alt="nati" src="images/NatiEmi.jpg"/>
                    <h3>NATALIA FRISON BARBERO</h3> 
                    <p>
                        Lic. en Nutrición. MP 3722 <br/>
                        Antropometrista ISAK nivel 1 <br/>
                        Posgrado en No dieta, Nutrición y Diabetes, Nutrición vegetariana y vegana y Nutrición deportiva.<br/>
                        Magister en Salud Materno Infantil.
                    </p>
                    <Button href="https://wa.me/5493541517199?text=Hola,%20me%20gustaria%20agendar%20un%20turno" target="_blank">Saca tu turno!</Button>
                </Card>
                <Card>
                    <img alt="emi" src="images/NatiEmi.jpg"/>
                    <h3>EMILSE ALMEIDA </h3> 
                    <p>
                        Lic. en Nutrición. MP 4087 <br/>
                        Antropometrista ISAK nivel 2 <br/>
                        Posgrado en  No dieta, Nutrición y Diabetes y  Nutrición deportiva. <br/>
                        Magister en Salud Pública.
                    </p>
                    <Button href="https://wa.me/5493515924669?text=Hola,%20me%20gustaria%20agendar%20un%20turno" target="_blank">Saca tu turno!</Button>
                </Card>
            </ContainerCard>
            <Map/>
        </Container>
    )
}

export default Contacto