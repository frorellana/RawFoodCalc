import React, {useState} from "react";
import { Button, Modal, Form} from 'react-bootstrap';

/*
Product card will have the following:
name,
description,
image,

*/
export default function ProductCard({name = 'Product', path = '/static/images/chickenLiver.png', desc='Description of product.', animal}) {   
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            {/* <a href="#" class="btn btn-primary stretched-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</a> */}
            <Button variant="primary" className="stretched-link" onClick={handleShow}>
              Add
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>{`${animal} - ${name}`}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="exampleNumber">
                    <Form.Label>Enter an Amount</Form.Label>
                   
                    <Form.Control type="number" step="0.01" min="0" placeholder="Enter a number" />
                      

                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary"  onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
        <img className="card-img-bottom" src={path}/>
      </div>
     
    </div>
  );
}