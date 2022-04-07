
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartArrowDown,faCloudDownload,faLanguage,faPlane,faPieChart} from "@fortawesome/free-solid-svg-icons";
import { faWordpress} from "@fortawesome/free-brands-svg-icons"

type ServicesProps =
{
    data:[];
}


export function Services(props: ServicesProps)
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
            {props.data
              ? props.data.map((d, i) => (
                  <Col md={4} key={`${d.name}-${i}`} >
                    {' '}
                    {d.icon=='faWordpress'?<FontAwesomeIcon icon={faWordpress} style={{ color: 'white',fontSize:'42px'}}/>:''}
                    {d.icon=='faCartArrowDown'?<FontAwesomeIcon icon={ faCartArrowDown} style={{ color: 'white',fontSize:'42px'}}/>:''}
                    {d.icon=='faCloudDownload'?<FontAwesomeIcon icon={faCloudDownload} style={{ color: 'white',fontSize:'42px'}}/>:''}
                    {d.icon=='faLanguage'?<FontAwesomeIcon icon={faLanguage} style={{ color: 'white',fontSize:'42px'}}/>:''}
                    {d.icon=='faPlane'?<FontAwesomeIcon icon={faPlane} style={{ color: 'white',fontSize:'42px'}}/>:''}
                    {d.icon=='faPieChart'?<FontAwesomeIcon icon={faPieChart} style={{ color: 'white',fontSize:'42px'}}/>:''}
              
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