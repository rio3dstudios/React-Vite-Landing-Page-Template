
import{Navbar,Nav,Container} from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import JsonData from "../data/data.json";
import { useState, useEffect } from "react";



export function NavbarManager()
{
    const [pageData, setPageData] = useState({});//pageData== vetor, setPageData == funcão para carregar o vetor
    useEffect(() => {
      setPageData(JsonData);
    }, []);

    return(

        
<div>

<div>
   <>
  

  <Navbar  collapseOnSelect fixed = 'top' expand='sm' className='navbar-default '>
    <Container>
        <Navbar.Brand >React Landing Page</Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle' aria-controls ='responsive-navbar-nav' />

        <Navbar.Collapse id = 'responsive-navbar-nav'   className="justify-content-end" >
         <Nav defaultActiveKey="/" as="ul">
         <Nav.Item>
           <Nav.Link href="#home" className="nav-links" >Home</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#about'  className="nav-links" >About</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#contact"  className="nav-links" >Contact</Nav.Link>
         </Nav.Item>
        
       
         </Nav>
        </Navbar.Collapse>
    
  
    </Container>
  </Navbar>
 
</>
</div>


</div>


  )
}