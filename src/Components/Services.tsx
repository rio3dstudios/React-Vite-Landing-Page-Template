
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown,faCloudDownload,faLanguage,faPlane,faPieChart} from "@fortawesome/free-solid-svg-icons";
import { faWordpress} from "@fortawesome/free-brands-svg-icons"
import {default as JsonData} from "../data/data.json";


export function Services()
{
    return(
        <div id='services' className='text-center'>
        <Container>
          <div className='section-title'>
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <Row>
          {JsonData
              ? JsonData.Services.map((d, i) => (
                  <Col md={4} key={`${d.name}-${i}`} >
                    {' '}
                    {d.icon=='faWordpress'?<FontAwesomeIcon icon={faWordpress} style={{ color: 'white',fontSize:'42px'}}/>:''}
                    {d.icon=='faCartArrowDown'?<FontAwesomeIcon icon={ faCartArrowDown} />:''}
                    {d.icon=='faCloudDownload'?<FontAwesomeIcon icon={faCloudDownload}/>:''}
                    {d.icon=='faLanguage'?<FontAwesomeIcon icon={faLanguage}/>:''}
                    {d.icon=='faPlane'?<FontAwesomeIcon icon={faPlane}/>:''}
                    {d.icon=='faPieChart'?<FontAwesomeIcon icon={faPieChart}/>:''}
              
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </Col>
                ))
              : 'loading'}
          </Row>
        </Container>
      </div>
    )

}