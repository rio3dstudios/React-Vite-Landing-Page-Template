
import{Navbar,Nav,Container} from 'react-bootstrap';

import JsonData from "../data/data.json";
import { useState, useEffect } from "react";



export function Navigation()
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
           <Nav.Link href="#features"  className="nav-links" >Features</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#services" className="nav-links" >Services</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#about'  className="nav-links" >About</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#portfolio'  className="nav-links" >Gallery</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#testimonials'  className="nav-links" >Testimonials</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#team'  className="nav-links" >Team</Nav.Link>
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