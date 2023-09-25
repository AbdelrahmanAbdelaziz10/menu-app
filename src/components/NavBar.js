import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { item } from './data';
import React, { useState } from 'react';

const NavBar = ({setItemdata}) => {
  const[searchvalue,setSearchvalue]=useState();

  // const[itemdata,setItemdata]=useState(item);

  const filterSearch=(word)=>{
    if(word !==""){
    const newItem=item.filter((item)=>item.title === word)
    setItemdata(newItem)
    }
    setSearchvalue('')

  }
  return (
    <Navbar expand="lg" className="navbar">
    <Container >
      <Navbar.Brand className='fs-4 font' href="#">مطعم جديد</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
        </Nav>
        <Form className="d-flex">
            <Form.Control type="search" placeholder="ابحث" value={searchvalue} 
            onChange={(e)=>setSearchvalue(e.target.value)} className=" ms-3" aria-label="Search"/>
            <Button className='b-light' onClick={()=>{filterSearch(searchvalue)}} variant="light">بحث</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar