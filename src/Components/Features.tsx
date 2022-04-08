

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck,faComment,faBullhorn,faGroupArrowsRotate,faMagic} from "@fortawesome/free-solid-svg-icons";
import {default as JsonData} from "../data/data.json";


export function Features()
{

    
    return(

        <div id="features"  className='text-center'>

        <Container >
          
          <Row >

            <Col md={{ span: 10, offset: 1 }} className="section-title" >
              <br></br>
              <br></br>
              <br></br>
            <p> <h2>Features</h2> </p>
            </Col>
         

          {JsonData
            ? JsonData.Features.map((d, i) => (
                <Col xs={6} md={3} key={`${d.title}-${i}`} >
                  {' '}

                {d.icon=='faComment'?<FontAwesomeIcon icon={faComment}/>:''}
                {d.icon=='faBullhorn'?<FontAwesomeIcon icon={faBullhorn}/>:''}
                {d.icon=='faGroupArrowsRotate'?<FontAwesomeIcon icon={faGroupArrowsRotate}/>:''}
                {d.icon=='faMagic'?<FontAwesomeIcon icon={faMagic}/>:''}
              
        

             

                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </Col>
              ))
            : 'Loading...'}
          </Row>
        </Container>
      </div>
    )

}