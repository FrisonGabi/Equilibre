import styled from "styled-components";


const Container = styled.div`
    width:100%;  
    height:600px; 
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    color: #fff; 
    text-align:center;
    background-image: url(${(props) => "images/fondo.png"});
    background-position: bottom;
    background-size:cover;
    margin-top:100px;
  
  @media (max-width:820px) {
        width:100%;
        background-size:cover;
        background-position:80% ;
        margin-top:0;
    }
`
const Presentacion = styled.div`
   @media (max-width:820px) {
        margin:auto;
    }
`

const Img = styled.img`

    @media (max-width:500px) {
        max-width:300px;   
    }
`

const Info = styled.div`  
    margin-top:80px;
    padding: 0 20px;
`
const P = styled.p`
    
    font-size: 22px;  
    min-width:200px;
    max-width:580px;
    font-style:italic; 

`


const Banner = () => {
    return(
        <Container>
            <Presentacion>               
                <Info>
                    <Img src="images/logo.png"/>                   
                    <P>"No empieces una dieta que terminara algun dia, 
                    comienza un estilo de vida que dure para siempre"</P>    
                </Info>
            </Presentacion>          
        </Container>
    )
}

export default Banner