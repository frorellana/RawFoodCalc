import React, {useState} from 'react';
import AvailableIngredients from './AvailableIngredients';
import Form from 'react-bootstrap/Form'

export default function Content({handleNewSelections, handleIncItems}) {
  return(
    <div id='content'>
      <h2>Available Ingredients</h2>
      <p>Choose ingredients to make up the meat / organ / bone ratio. Upon selecting ingredient, enter amount in pounds. </p>
      <section> 
        <AvailableIngredients handleNewSelections={handleNewSelections} handleIncItems={handleIncItems}/>
      </section>
    </div>
  )
}