import React, {useState} from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import { useNavigate, Link } from 'react-router-dom';
import { Modal, Button, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'








export default function MainContainer({handleSelectionUpdate, handleNewSelections, selections, onDelete}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [totalItems, setTotalItems] = useState(0)

  function handleIncItems() {
    setTotalItems(prevCount => prevCount + 1);
  }
  function handleDecItems() {
    setTotalItems(prevCount => prevCount === 0 ? 0 : prevCount - 1);
  }
 
  return(
    <div id='main'>
       <Navbar id='navbar' expand="lg" className="bg-body-tertiary" fixed='top'>
        <Container fluid>
          <Navbar.Brand id='navTitle' href='#'>
          <FontAwesomeIcon icon={faCat} style={{color: "#a55f84", paddingRight: '10px', }} />
          Raw Food Calculator for Cats
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-'> */}
            <Nav>
              <Nav.Link id="cartLink" href='#'className="me-0" onClick={handleShow}>
              
              <i id='cartIcon' className="bi bi-cart-fill h1"></i>
              {totalItems !== 0 ? <span className="badge rounded-pill badge-notification bg-danger">{totalItems}</span> : <></>}
            
              
              </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
  
      <div id='frontDisplay'> 
        <Content handleNewSelections={handleNewSelections} handleIncItems={handleIncItems}/>
      
      </div>
      <Modal show={show} onHide={handleClose} fullscreen='md-down' animation={true} dialogClassName="right" size="lg">
              <Modal.Header id='cartHeader' closeButton>
                <Modal.Title>Selections</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Sidebar handleSelectionUpdate={handleSelectionUpdate}selections={selections} onDelete={onDelete} handleDecItems={handleDecItems}/>
              </Modal.Body>
              
            </Modal>
    </div>
  )
}