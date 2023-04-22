import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import {  AiOutlineArrowRight, AiOutlineEye, AiOutlineFieldTime } from 'react-icons/ai';
import dp from './dp.jpg'
import log1 from './log1.jpg'

const Contained = () => {
  return (
    <Container className='bg-dark text-white' >
    <Row >
    {
    // 1st navbar Contained start
  }
      <Col className='pop2' >
        <h1 className="fw-bolder h1 ">Released New
        <br/>
          Call of Duty:<br/>
          Modern <br />
          Warfare 2<br />
          Trailer</h1>

        <p className='text-secondary h4 '>The ultimate weapon is team.
          Squad up and fight alongside the iconic operators of Task Force 141 with the return of Modern Warfare®.</p>

          <pre className='mt-5 text-white   '><img src={dp}  style={{height: '4vh',borderRadius:'100px'}} alt="Cinque Terre" /> @Vashishtha      22april,2023   </pre>
      </Col>
      {
    // 1st navbar Contained End
  }
    {
    // 1st navbar image start
  }
      <Col  xs={4} className='logo1'>
        
      </Col>
      {
    // 1st navbar image End
  }
      <Col>
        <Row className='pop'  >
        {
    // 1st navbar News start
  }
          <div className='col-lg-12'>
            <p className='p7'> POPOLAR NEWS</p>
          </div>
          <div className='col-lg-8 '>
            <p className='p3'>when god of war ragnarok relese on japan ?</p>
          </div>
          <div className='col-lg-4 text-end '>
            <span className='arrow'><AiOutlineArrowRight /></span>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>  < AiOutlineEye /> 3245 </p>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>  <AiOutlineFieldTime /> 4 min</p>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>    26 sep.2021</p>
          </div>
          <hr color='white' />
          <div className='col-lg-8'>
            <p className='p3'>Rosario Dawson Walks Back Punisher
              Confirmation Comments</p>
          </div>
          <div className='col-lg-4 text-end '>
            <span className='arrow'><AiOutlineArrowRight /></span>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>  < AiOutlineEye /> 3245 </p>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>  <AiOutlineFieldTime /> 4 min</p>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>    26 sep.2021</p>
          </div>
          <hr color='white' />
          <div className='col-lg-8 width '>
            <p className='p3'>The Sandman: What to Read After Watching the Netflix Series</p>
          </div>
          <div className='col-lg-4 text-end '>
            <span className='arrow'><AiOutlineArrowRight /></span>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>  < AiOutlineEye /> 3245 </p>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>  <AiOutlineFieldTime /> 4 min</p>
          </div>
          <div className='col-lg-3'>
            <p className='p1'>    26 sep.2021</p>
          </div>
          <hr color='white' />
          {
    // 1st navbar News End
  }</Row> </Col> </Row>
 </ Container>
  )
}

export default Contained