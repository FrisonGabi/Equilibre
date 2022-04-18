import styled from "styled-components"

const Info = styled.div`
    width:100%;
    
    line-height:25px;
    font-size:20px;

    
    @media (max-width:800px) {
        font-size:15px;
        line-height:22px;
    }
    position:absolute;
    z-index:10;
    &>p, h2, h4{
        width:90%;
        margin-left:20px;
    }
`

const Container = styled.div`
    width:80%;
    margin:auto;
    position:relative;
    margin-top:70px;
    display:flex;
    @media (max-width:340px) {
        width:100%;
        
    }
`
const Bg = styled.div`
    width:100%;
    height:400px;
    position:relative;
    opacity:0.5;
    background-image: url(${(props) => "images/banner.jpg"});
    border-radius:4px;
`


const Servicios = () => {
    return(
        <Container id="servicios">
            
            <Info>
                <h2>Que ofrecemos?</h2>
                <h4>Atención para niños, adolescentes y adultos</h4>
                    <p>-Nutrición Clínica (Diabetes, Hipertensión, Descenso de peso, Aumento de peso, Dislipemias, etc).</p>
                    <p>-Nutrición Vegetariana y Vegana.</p>
                    <p>-Nutrición Deportiva.</p>
                    <p>-Antropometrías.</p>
                    <p>-Planes alimentarios personalizados.</p>
                    <p>-Charlas (ver bien como ponerlo).</p>
            </Info>
            <Bg/>
        </Container>
    )
}

export default Servicios