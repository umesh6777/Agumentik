import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import god  from './god.jpg';
import assain  from './assain.jpg';
import max  from './max.jpg';
import game  from './game.png';
import Nav2 from './Nav2';
import Form from 'react-bootstrap/Form';
import Contained from './Contained';
import Contained2 from './Contained2';
const Nav1 = () => {
  return (

    <Container fluid className='pt-5'>
      <Row className="justify-content-md-center">
        <Col  >
        {
        // 1st navbar start 
         }
          <Navbar bg="dark" variant="dark" expand="lg"   >
            <Navbar.Brand href="#">   <img src={game} width='80'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Show</Nav.Link>
                <Nav.Link href="#action2">Store</Nav.Link>
                <Nav.Link href="#action3">News</Nav.Link>
                <Nav.Link href="#action4">Videos</Nav.Link>
                <Nav.Link href="#action5">Review</Nav.Link>
                <Nav.Link href="#action6">Playlist</Nav.Link>
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
              <Nav className="me-auto my-2   my-lg-0" style={{ maxHeight: '100px' }}
                navbarScroll>
                <Button variant="dark"><AiOutlineSearch width={20} /></Button>

                <Nav.Link  > <Button variant="outline-light">Login</Button></Nav.Link>
                <Nav.Link  > <Button variant="success">Sign up</Button></Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
          {
            // 1st navbar End
          }
          <Container className='bg-dark text-white' >
           
         
           
         <Contained/>
         
            <div  className='row mt-3' >
              <div className='col-lg-11 offset-1 trendingnews'>
     <p className='fw-bold'>Trending News</p>
     <div className='row'>
 <div className='col-lg-2'>
    <img src={god} alt="god of war image" className="img-fluid news"/> 
     </div>
     <div className='col-lg-3'>
     <p className='p3'>when god of war ragnarok relese on japan?</p>
     <p className='p1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry
     Lorem Ipsum has been the industry's standard dummy text ever since the</p>
</div>
<div className='col-lg-2'>
<img src={assain } alt="assain image" className="img-fluid news"/> 

</div>
<div className='col-lg-3'>
<p className='p3'>All the treasures of assassin's creed iv black flag game</p>
<p className='p1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry
     Lorem Ipsum has been the industry's standard dummy text ever since the</p>
</div>
<div className='col-lg-2'>
<img src={max } alt="max image" className="img-fluid news"/> 
</div>
 </div>
              </div>

            
              
            </div>
            <Nav2/>
          </Container>

        </Col>

        <Col sm={3}>
        {
  /*
NavBAR START
  */
}

          <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
 <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}navbarScroll>
 <img src={game} width='30'/> 
  <Nav.Link  >< GiHamburgerMenu size={20} /></Nav.Link>
                </Nav>
                <Form className="d-flex">
               
              <input type="search" className="bg-dark text-white " placeholder="search"/>
                  <Button variant="dark"><AiOutlineSearch width={20} /></Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
{
  /*
NavBAR END
  */
}
     <Contained2/> {
  /*
Contained 2 is here
  */
}
        </Col>
      </Row>
    </Container>

  )
}

export default Nav1





