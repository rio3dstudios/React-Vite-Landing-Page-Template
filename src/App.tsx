import './App.css'

import { Navigation } from './Components/Navigation'
import {default as JsonData} from "./data/data.json";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Features } from './Components/Features';
import { Gallery } from './Components/Gallery';
import { Testimonials } from './Components/Testimonials';
import { Team } from './Components/Team';
import { Services } from './Components/Services';





function App() {


  const [pageData, setPageData] = useState({});//pageData== vetor, 
                                              // setPageData == funcão para carregar o vetor

  useEffect(() => {//recebe como primeiro parâmetro uma função 
                   // que será executada assim que o componente renderizar.
    setPageData(JsonData);
  }, []);
 
  return (
   
    <div>
      <Navigation/>
      <Home />
      <Features />
      <Services />
      <About />
      <Gallery />
      <Testimonials/>
      <Team />
      <Contact />
      


    </div>
    
    



   
  )
}

export default App
