
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";



type AboutProps =
{
    data:[];
}


export function About(props: AboutProps)
{
    return(
       
        <div id="about">




        <Container >
          <Row>
            <Col xs={12} md={6}>
              {" "}
              <img src="img/about_img.png" className="img-responsive" alt="" />{" "}
            </Col>
            <Col xs={12}  md={6} >
              <div className="about-text">
                <h2>About Us</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                <Row>
                  <Col lg={6} sm={6}  xs={12}>
                 <ul>
                      {props.data
                        ? props.data.Why.map((key, index) => (
                          
                               
                                  <li>
                                  <FontAwesomeIcon icon={faCheck} style={{ color: 'blue' }} />
                                  
                                   {" "}{`${key}`}
                                   </li>
                          
                          ))
                        : "loading"}
                    </ul>
                  </Col>
                  <Col lg={6} sm={6}  xs={12}>
                    <ul>
                      {props.data
                        ? props.data.Why2.map((key, index) => (
                            <li>
                               <FontAwesomeIcon icon={faCheck} style={{ color: 'blue' }} />
                            {" "}{`${key}`}
                             </li>
                          ))
                        : "loading"}
                    </ul>
                  </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
