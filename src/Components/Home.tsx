import { Container, Row, Col } from 'react-bootstrap';


type HomeProps =
{
    data:[];
}

export function Home(props: HomeProps)
{
    return(
        <header id='home'>
        <div className='intro'>
          <div className='overlay'>
          <Container >
              <Row>
                <Col   md={{ span: 8, offset: 2 }} className=' intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Learn More
                  </a>{' '}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
    )
}
