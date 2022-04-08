import { Container, Row, Col } from 'react-bootstrap';
import {default as JsonData} from "../data/data.json";


export function Team()
{
    return(
    
    <div id='team' className='text-center'>
      <Container>
        <Col md={{span:8, offset:2}} className=' section-title'>
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </Col>
        <Row>
          {JsonData
            ? JsonData.Team.map((d, i) => (
                <Col md={3} sm={6} key={`${d.name}-${i}`} className=' team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </Col>
              ))
            : 'loading'}
        </Row>
      </Container>
    </div>
    )
}