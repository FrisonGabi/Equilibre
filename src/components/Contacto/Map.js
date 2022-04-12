import styled from "styled-components";
import GoogleMaps from "simple-react-google-maps";

const Container = styled.div`
    margin-top:20px;
    padding:5px;
    width:100%;
    max-width:700px;
    background-color:#eee;
    border-radius:4px;
    &>p {
        text-indent:15px;
    }
    
`
const MapSize = styled.div`
    height:400px;
    width:100%;
    max-width:700px;
`

const Map = () => {
    return(
        <Container>
            <MapSize>
            <GoogleMaps
                apiKey={"AIzaSyAvzcNcUPew2t9dHXgRMHW235PkkNqi53c"}
                style={{height:"100%", width:"100%"}}
                zoom={12}
                center={{
                    lat: -31.402038769557723,
                    lng: -64.21718863650423
                }}
                markers={[
                    {lat:-31.410226470284165, lng:-64.2132967811268},
                    {lat:-31.426143942189817, lng:-64.18521179017654},
                    {lat:-31.373051645146077, lng:-64.23592533340839},
                ]}
            />
            </MapSize>
            <p>Duarte Quiros 2178 - Alto Alberdi</p>
            <p>Ituzaingo 791 - Nueva Córdoba</p>
            <p>Tristán Malbran 4177 - Cerro de las rosas</p>
        </Container>
    )
}
 
export default Map