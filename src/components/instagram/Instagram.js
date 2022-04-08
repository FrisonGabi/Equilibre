import {useState, useEffect} from "react";
import Axios from "axios"
import styled from "styled-components"
import Carousel from "react-elastic-carousel"


const P = styled.p`
  color:#fff;
  font-size:17px;
  padding:15px;
  line-height:25px;
  font-style:italic;
`

const DivP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: rgba(0,118,110,0.8);
  opacity: 0;
  transition: opacity 0.7s;
  
  &:hover{
    opacity:1;  
    
  }
`

const DivImg = styled.div`
   
  display:flex; 
  justify-content:center; 
  align-items:center;
  background-image: url(${(props) => props.background});
  background-size:100%;
  width:300px;
  height:300px;
  border-radius:5px;
  
  &:hover{
    cursor:pointer;
  }
`

const Card = styled.div` 
  margin:20px;
  background-color:#eee;
  width:300px;
  padding:6px;
  border-radius:5px;
  box-shadow: 2px 5px 10px 2px rgba(0,0,0,0.4);
  
`

const Container = styled.aside`
  width: 80%;
  margin: auto;
  display:flex;
  @media (max-width:820px) {
        width:100%;
        margin: auto;
    }
`

const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink
&access_token=IGQVJXTkhOU1ZAxOGV1VF81cTRHT3dUQ1lCTUxqLTNKcmxCdnRvOTk4ZAWMtM3dIR0FvWV9q
RGhEZAkZAfRjNzQTFoWS1xZAVdlLTAzWG9yM3dhdlN5b0ZAwT0Ixb3JDYmw5OEpSOU5INkJzeUVRanlpMTRKXw
ZDZD&limit=19`

const breakPoints = [
  {width:1, itemsToShow:1},
  {width:620, itemsToShow:2},
  {width:768, itemsToShow:3},
  {width:1200, itemsToShow:4},
]

const Instagram = () => {
    const [publicaciones, setPublicaciones] = useState([])

    const open = (url) => {
      return window.open(url)
    }

    useEffect(() => {
      Axios.get(url)
        .then(res => {
          setPublicaciones(res.data.data)
        })
        
    }, []);

  
    return(
        <Container > 
         <Carousel 
          breakPoints={breakPoints}
          enableAutoPlay autoPlaySpeed={3500}
         >
            {publicaciones.map(p => (
              <Card key={p.id} >
                <DivImg background={p.media_url} onClick={() => open(p.permalink)}>
                  <DivP>
                    <P>"{p.caption.slice(0,200)}..."</P>
                  </DivP>
                </DivImg>
              </Card>
            ))}
         </Carousel>
        </Container>
    )
}

export default Instagram