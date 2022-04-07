import './App.css'

import { Navigation } from './Components/Navigation'
import JsonData from "./data/data.json";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Features } from './Components/Features';
import { Gallery } from './Components/Gallery';
import { Testimonials } from './Components/Testimonials';
import { Team } from './Components/Team';



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
      <Home  data={pageData.Header} />
      <Features data={pageData.Features}/>
      <About  data={pageData.About} />
      <Gallery data={pageData.Gallery} />
      <Testimonials data={pageData.Testimonials} />
      <Team data ={pageData.Team} />
      <Contact  data={pageData.Contact} />
      


    </div>
    
    



   
  )
}

export default App
