

import { Container, Row, Col,Grid } from 'react-bootstrap';
import { Image } from "./Image";
type GalleryProps =
{
    data:[];
}


export function Gallery(props: GalleryProps)
{
    return(

     <div id='portfolio' className='text-center'>
        <Container>
          <div className='section-title'>
            <h2>Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
        
          <div className='portfolio-items'>   
          
            <Row>
            {props.data
              ? props.data.map((d, i) => (
                <Col sm={6} lg md={4} key={`${d.title}-${i}`}>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </Col>
              ))
              : 'Loading...'}
           </Row>
         </div>
       </Container>
      </div>

    )
   

}