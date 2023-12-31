import React from "react";
import Ingredient from "../components/Ingredient";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";


export default function Selection({selections, onDelete, handleDecItems, handleSelectionUpdate}) {
  return(
    <section id='selections'>
      {/* <header className='selectionsHeader'>
        <Link to='/' className='backArrow' >
          <i className="bi bi-arrow-left-circle"></i>
        </Link>
      <h1>Selections</h1>

      </header> */}
      <ListGroup>
        {selections.map(item => <Ingredient handleSelectionUpdate={handleSelectionUpdate} id={item.id} amount={item.amount} selectedingredient={`${item.animal} - ${item.part}`} onDelete={onDelete} handleDecItems={handleDecItems}/>)}
      </ListGroup>
    </section>
  );
}