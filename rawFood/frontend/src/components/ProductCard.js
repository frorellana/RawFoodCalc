import React, {useState} from "react";
import { Button, Modal, Form} from 'react-bootstrap';

/*
Product card will have the following:
name,
description,
image,

*/
export default function ProductCard({part = 'Product', path,ratio, animal, id, handleNewSelections, handleIncItems}) {   
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState('');
  console.log('productcard', id, animal, part)
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  
  const handleShow = () => setShow(true);
  
  const handleClose = () => {
    setAmount('')
    return setShow(false);
  }
  const handleSave = () => {
    const selectedCard = {
      animal,
      part,
      amount: parseFloat(amount),
      meat: ratio.meat,
      bone: ratio.bone,
      organ: ratio.organ
    }
    handleNewSelections(selectedCard)
    handleIncItems()
    console.log(`${animal} - ${part}: ${amount}. the data type of amount is: ${typeof amount}`)
    setAmount('')
    return setShow(false);
  }
  return(
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
            <h5 className="card-title">{part}</h5>
            <p className="card-text">{`Meat / Bone / Organ : ${ratio.meat} / ${ratio.bone} / ${ratio.organ}`}</p>
            <Button variant="primary" className="stretched-link" onClick={handleShow}>
              Add
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>{`${animal} - ${part}`}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="exampleNumber">
                    <Form.Label>Enter an Amount</Form.Label>
                    <Form.Control type="number" step="0.01" min="0" placeholder="0" value={amount} onChange={handleAmountChange} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary"  onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave} disabled={amount === ""}>
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