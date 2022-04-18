
import Instagram from "./components/instagram/Instagram";
import Navbar from "./components/Menu/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Nosotras from "./components/Nosotras/Nosotras";
import Contacto from "./components/Contacto/Contacto";
import Servicios from "./components/Servicios/Servicios";
import Faq from "./components/Faq/Faq";




function App() {
  return (
    <> 
    <Navbar />
    <Banner />

    <Nosotras/>
    <Instagram/>
    <Servicios/>  
    
    <Contacto/>

    <Faq/>

    <Footer/>
    </>
  );
}

export default App;
