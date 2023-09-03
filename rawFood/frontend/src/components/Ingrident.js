import React, {useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';


export default function Ingrident({id, amount, selectedIngrident, onDelete, handleDecItems, handleSelectionUpdate}) {
  // const [ingridents, setIngridents] = useState([]);
  function handleOnDelete() {

    onDelete(id);
    handleDecItems();
  }

  function handleInputChange(e) {
    const newValue = e.target.value;
    // Check if the input is empty or not a number (NaN)
    // If true, set it to 0, otherwise, parse the value as a float
    const parsedValue = newValue === '' || isNaN(parseFloat(newValue)) ? 0 : parseFloat(newValue);
    handleSelectionUpdate(id, parsedValue)
  };


  return(
    <ListGroup.Item>
      <div className="d-flex justify-content-between">
      {selectedIngrident}

      <div className="d-flex justify-content-end selectionInput">
        <div className="input-group">
          {/* <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" id="minusButton">-</button>
          </div> */}
          <input type="number" step='0.01' className="form-control" value={amount} min="0" onChange={handleInputChange} placeholder="0"/>
          {/* <div className="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="plusButton">+</button>
          </div> */}
        <button type="button" className="btn btn-outline-danger" onClick={handleOnDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
        </div>

      </div>
    </ListGroup.Item>
  );
}