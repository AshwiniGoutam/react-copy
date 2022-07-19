import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLeaf, faTrophy, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import './reliance.css'
const Reliance = ()=>{

    // return(
    //   <div className="container-flex">
    //       <div className="row">
    //             <div className="col-6 p-0">
    //                 <img className='reliance-dots' src='./images/features-dot 1.png' alt='dots'/>
    //                 <img  className='reliance-image' src="./images/fresh1.png" alt="image"/>
    //             </div>
    //             <div className="col-6">

    //             </div>
    //       </div>
    //   </div>

    // <Container fluid="xs">
    //     <Row>
          
    //         <Col className='col-sm-6'>
    //             <img className='reliance-dots' src='./images/features-dot 1.png' alt='dots'/>
    //             <img className='relaince-box' src='./images/box.png' alt="relaince"/>
    //             <img  className='reliance-image' src="./images/fresh1.png" alt="image"/>
    //         </Col>
    //                   <Col className='col-sm-6 btm-x'>
    //         <div className=''>
    //             <p className='relaince-stick'>___Our Feature</p>
    //         </div>
    //         <div className=''>
    //             <h2 className='big-text'>We Are Best for Your <br/>Foods Partners </h2>
    //         </div>
    //         <div className=''>
    //             <div className='re-card-1'>
    //             <Card style={{ width: '18rem' }}>
    //                 <Card.Img variant="top" src="./images/vector-1.png" />
    //                     <Card.Body>
    //                         <Card.Title>Agriculture</Card.Title>
    //                             <Card.Text>
    //                             Sedut perspi ciatis undmn see iste natus error sit volupta
    //                             </Card.Text>
    //                     </Card.Body>
    //             </Card>
    //         </div>
    //         <div className='re-card-2'>
    //             <Card style={{ width: '18rem' }}>
    //                 <Card.Img variant="top" src="./images/vector-1.png" />
    //                     <Card.Body>
    //                         <Card.Title>Agriculture</Card.Title>
    //                             <Card.Text>
    //                             Sedut perspi ciatis undmn see iste natus error sit volupta
    //                             </Card.Text>
    //                     </Card.Body>
    //             </Card>
    //         </div>
    //         </div>
    //     </Col>
    //     </Row>
    // </Container>
     
    // )
    
    // }

return(

    <>
    <Container fluid="xs">
    <Row>
        <Col xs={12} md={6} lg={6} >
            <div className='left-box'  style={{width:'100%'}}>
                <img className='reliance-dots' src='./images/features-dot 1.png' alt='dots'/>
                <img className='relaince-box' src='./images/box.png' alt="relaince"/>
                <img  className='reliance-image' src="./images/fresh1.png" alt="image"/>
                </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
            <div className='right-box'  style={{width:'100%'}}>
        <div className=''>
                 <p className='relaince-stick'>___Our Feature</p>
             </div>
             <div className=''>
                <h2 className='big-text'>We Are Best for Your Foods Partners </h2>
            </div>
            <div className='re-card-flex'>
                <div className='re-card-1'>
                 <Card style={{ width: '18rem' }} className='rounded mx-auto d-block'>
                     <Card.Img variant="top"className='card-re-1 rounded mx-auto d-block' src="./images/vector-1.png" />
                         <Card.Body>
                             <Card.Title className='agri-re'>Agriculture</Card.Title>
                                 <Card.Text>
                                 Sedut perspi ciatis undmn see iste natus error sit volupta
                                 </Card.Text>
                         </Card.Body>
                 </Card>
             </div>

             <div className='re-card-1 pd-l'>
                 <Card style={{ width: '18rem' }} className='rounded mx-auto d-block'>
                     <Card.Img variant="top"className='card-re-1 rounded mx-auto d-block' src="./images/vector-2.png" />
                         <Card.Body>
                             <Card.Title className='agri-re'>Agriculture</Card.Title>
                                 <Card.Text>
                                 Sedut perspi ciatis undmn see iste natus error sit volupta
                                 </Card.Text>
                         </Card.Body>
                 </Card>
             </div>

             </div>
             </div>
        </Col>
      </Row>
      <div class="features-counter-area">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="features-counter mt-30 text-center text-sm-left">
                        <FontAwesomeIcon className='re-icons' icon ={faUsers}/>
                            <span>Team Member</span>
                            <h3 class="title-counter">3697</h3>
                        
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="features-counter item-2 mt-30 text-center text-sm-left">
                        <FontAwesomeIcon className='re-icons' icon ={faLeaf}/>
                            <span>Our Farms</span>
                            <h3 class="title-counter">8965</h3>
                           
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="features-counter item-3 mt-30 text-center text-sm-left">
                        <FontAwesomeIcon className='re-icons' icon ={faTrophy}/>
                            <span>Win Awards</span>
                            <h3 class="title-counter">6579</h3>
                          
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="features-counter item-4 mt-30 text-center text-sm-left">
                        <FontAwesomeIcon className='re-icons' icon ={faCoffee}/>
                            <span>Gold Partners</span>
                            <h3 class="title-counter">59632</h3>
                           
                        </div>
                    </div>
                </div>
            </div>
    </Container>
        </>

)
}








    export default Reliance;