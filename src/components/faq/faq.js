import './faq.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Faq = () =>{
    return(
        <>
    <Container fluid="xs">
        <Row  style={{ width: '100%' }}>
            <Col xs={12} md={6} lg={6} >
                <div className='faq'>
                    <p className='faq-q'>__FAQ__</p>
                    <h2 className='faq-heading'>Frequently Ask <br/> Questions</h2>
                    <p className='faq-para'>But must explain you how all this mistaken idea noun pleasure and praising pain wasborn and will give apete account of the system and expound the actual teachingsthe great explorer o2O20f the truth the master</p>
                </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <p className='faq-p'>Summer Adventures Wallpapers Edition ?</p>
                <p className='faq-par'>Pleasure and praising pain was born and will count of system and expond the actual teachin egshe great explorer of truth the master builder human ness rejects dislikes avoids</p>
                <p className='faq-para-1'>Relationship Between Gamification  Modern ? </p>
                <p className='faq-para-1'>Progressive Enhancing CSS Layout  Mex ?  </p>
                <p className='faq-para-1'>Web Development Reading Images in  Notif ?</p>
                <p className='faq-para-1'>gaming Advanced Color Ima In Photoshop ?  </p>
                <p className='faq-para-1'>Progressive Enhancing CSS Layout  Mex ?  </p>
                <p className='faq-para-1'>Relationship Between Gamification Modern ? </p>
            </Col>
        </Row>
    </Container>
        </>
    )
}
export default Faq;