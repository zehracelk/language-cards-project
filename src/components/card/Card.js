
import Container from 'react-bootstrap/esm/Container';
import '../card/Card.css';
import Language from '../Language';
import {data} from "../../helper/data";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'


const Card = () => {
  return (


   
    <Container className='rounded-4 mt-4' style={{ background: "#f48b29"}}>
      <h1>Language</h1>
      <Row>
      {data.map((lang,index)=>{
        return(
          <Col sm={6} md={4} lg={3} key={index}>
          <Language {...lang} />
          </Col>
        );
      })}
      </Row>
    </Container>

    )
}

export default Card
