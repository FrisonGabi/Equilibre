import styled from "styled-components";


const Container = styled.section`
    background-color:#eee;
    width: 80%;
    height:500px;
    margin:auto;
    display:flex;
    padding:5px;
    margin-top:20px;
    border-radius:10px;
    @media (max-width:400px) {
        flex-direction:column;
        width:90%;
    }
`

const Info = styled.div`
    
    width:60%;
    border-radius:10px 0 0 10px;
    @media (max-width:400px) {
        width:100%;
        height:50%;
        
    }
`

const Foto = styled.div`
    width:40%;
    border-radius:0px 14px 14px 0;
    background-image: url(${(props) => "images/NatiEmi.jpg"});
    background-size:cover;
    @media (max-width:400px) {
        width:100%;
        height:50%;
        border-radius:0 0 10px 10px;
        background-position:cover;
        
    }

`

const Nosotras = () => {
    return (
        <Container id="nosotras">
            <Info>

            </Info>
            <Foto/>
        </Container>
    )
}

export default Nosotras