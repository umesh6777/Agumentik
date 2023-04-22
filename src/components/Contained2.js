import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import {  AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import horizon from './horizon.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import dp from './dp.jpg'

const Contained2 = () => {
  return (
    <Container>
    <Row>
      < Col className='bg-dark'>
        <Row className='logo2'>
          <div className='rgba'>
            <div className='col-lg-11 offset-1 '>
              <p className='p7 text-white '>
                POPULAR NEWS
              </p>
            </div>
            <div className='col-lg-12 cont '>
              <div className='row'>
                <Col>
                  <span className='arrow'><AiOutlineArrowLeft size={30} /></span>
                </Col>
                <Col className='text-end'>
                  <span className='arrow'><AiOutlineArrowRight size={30} /></span>
                </Col>

              </div>

              <p className='h2 fw-bolder text-white text-center'>Released New
                Call of Duty:
                Modern
                Warfare 2
                Trailer</p>

              <p className='p5 text-white text-white'>
                The ulfimate weapon is team.
                Squad up and fight alongside the iconic operators of Task Force 141 with the return of Modern Warfare®.
              </p>
              <pre className='mt-2 text-white   p3'><img src={dp}  style={{height: '4vh',borderRadius:'100px'}} alt="Cinque Terre" /> @Vashishtha      22april,2023</pre>
            </div>
          </div>


        </Row>
      </Col>
    </Row>
  
<Row>
<Col>
<p className='fw-bolder text-center mt-5 text-white'>News</p>
  <div className='row mt-3 mb-3'>
<div className='col-lg-5 offset-1 '>
<p className=' fw-bold mt-2 text-white'>Category : </p> 
</div>
<div className='col-lg-4  '>
<Dropdown className='mb-2'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Game
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
</div>
 
  </div>
<img src={horizon} alt="horizon"   className="news mt-2 img-fluid" />

<p className='mt-5 text-white  '><img src={dp}  style={{height: '4vh',borderRadius:'100px'}} alt="Cinque Terre" /> @Vashishtha</p>

<p className='mt-5 text-center fw-bold text-white'>New Horizon Forbidden West
Update Available</p>
<p className='p1 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry
     Lorem Ipsum has been the industry's standard dummy text ever since the</p>
</Col>
</Row>
  
  </Container>
  )
}

export default Contained2
