import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container, Form,Row,Col } from 'react-bootstrap';
import gta6 from './gta6.jpg'
import horizon from './horizon.jpg'
import last from './last.jpg'
import overwatch from './overwatch.jpg'
import dp from './dp.jpg'
const Nav2 = () => {
    return (
   <Container>
        <Navbar className='mt-4' bg="dark" variant="dark" expand="lg"  >
            <Navbar.Brand className='fw-bolder'href="#">News</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Last</Nav.Link>
                    <Nav.Link href="#action2">Videos</Nav.Link>
                    <Nav.Link href="#action3">Games</Nav.Link>
                    <Nav.Link href="#action4">Movies</Nav.Link>
                    <Nav.Link href="#action5">Tv</Nav.Link>
                    <Nav.Link href="#action6">Playstation</Nav.Link>
                    <Nav.Link href="#action6">Pc</Nav.Link>
                    <Nav.Link href="#action6">Xbox</Nav.Link>
                    <NavDropdown title=" More" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action7">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action8">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action9">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                <input type="search" className="bg-dark text-white " placeholder="search"/>
                  <Button variant="dark"><AiOutlineSearch width={20} /></Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
<Row className='mt-2 mb-5'>
<Col>
<img src={horizon} alt="horizon"  className="news img-fluid" />
<p className='mt-2 text-white  p3'><img src={dp}  style={{height: '4vh',borderRadius:'100px'}} alt="Cinque Terre" /> @Vashishtha</p>
<p className='p5 text-center fw-bold'>New Horizon Forbidden West
Update Available</p>
</Col>

<Col>
<img src={overwatch} alt="overwatch"  className="news img-fluid"/>
<p className='mt-2 text-white  p3'><img src={dp}  style={{height: '4vh',borderRadius:'100px'}} alt="Cinque Terre" /> @Vashishtha</p>
<p className='p5 text-center fw-bold'>Overwatch 2 Survey Asking
About $45 Skins</p>
</Col>

<Col>
<img src={gta6} alt="gta6"  className="news img-fluid"   />
<p className='mt-2 text-white  p3'><img src={dp}  style={{height: '4vh',borderRadius:'100px'}} alt="Cinque Terre" /> @Vashishtha</p>
<p className='p5 text-center fw-bold'>GTA 6 Will Be a Very Different
GTA Is That a Good?</p>
</Col>
<Col>
<img src={last} alt="last"  className="news img-fluid" />
<p className='mt-2 text-white  p3'><img src={dp}  style={{height: '4vh',borderRadius:'100px'}} alt="Cinque Terre" /> @Vashishtha</p>
<p className='p5 text-center fw-bold'>The Last of Us Remake New
Modes and Enhancements</p>
</Col>
</Row>
   </Container>
    )
}

export default Nav2