import './store.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';


const Store = ()=>{

    return(
    <>
    <Container fluid="xs bg-img">
    <Row  style={{ width: '100%' }}>
        <Col xs={12} md={6} lg={6} >
            <div className='store-left-box'>
                <p className='store-para'> ___Our Store</p>
                <h2 className='store-heading'>Visit Our Store <br/> For Foods</h2>
                <p className='store-para-2'>Sed ut perspiciatis unde omnis  iste natus error <br/>sit voluptatem  accusantium doloremque laudan tium, <br/> totam rem aperiam, eaque ipsa quae</p>

            </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
            <div className='store-right-box' style={{textAlign:'center'}}>
        <CardGroup>
            <Card className='card-1 rounded mx-auto d-block'>
                <Card.Img variant="top" className='store-card-1 rounded mx-auto d-block ' src="./images/tomato.png" />
                <Card.Body>
                <Card.Title>Fresh Tomato<br/>Kg $89.00</Card.Title>
                <Card.Text>
                
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='rounded mx-auto d-block'>
                <Card.Img variant="top" className='store-card-1' src="./images/broccoli.png" />
                <Card.Body>
                <Card.Title>Fresh Broccoli <br/> Kg $89.00</Card.Title>
                <Card.Text>
             
                </Card.Text>
                </Card.Body>
            </Card>
        
            
        </CardGroup>

        </div>
        </Col>
    </Row>
    </Container>
    </>
    )
    
    }
    export default Store;