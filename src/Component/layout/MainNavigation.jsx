import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FavoratesContext from '../../store/Favorate-Context';
function MainNavigation() {
  const favoriteCtx=useContext(FavoratesContext)
  const badge={
    backgroundColor:'red',
    color:'white',
    borderRadius:'20px',
    marginLeft:'0.2rem',
    padding:'0.2rem'
  }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} >All Meetup</Nav.Link>
            <Nav.Link as={Link} to={'/add-meetup'}>Add Meetup</Nav.Link>
            <Nav.Link as={Link} to={'/favorates'}>All Favorates <span className='text' style={badge}>{favoriteCtx.totalFavorites}</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  )
  }


export default MainNavigation