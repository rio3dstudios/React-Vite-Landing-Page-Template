import{Container,Row,Col} from 'react-bootstrap';
type TestimonialsProps =
{
    data:[];
}


export function Testimonials(props: TestimonialsProps)
{
    return(
        <div id='testimonials'>
        <Container>
          <div className='section-title text-center'>
            <h2>What our clients say</h2>
          </div>
          <Row>
            {props.data
              ? props.data.map((d, i) => (
                  <Col md ={4} key={`${d.name}-${i}`}>
                    <div className='testimonial'>
                      <div className='testimonial-image'>
                        {' '}
                        <img src={d.img} alt='' />{' '}
                      </div>
                      <div className='testimonial-content'>
                        <p>"{d.text}"</p>
                        <div className='testimonial-meta'> - {d.name} </div>
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