import React, {useState} from 'react';
import Ingridents from './AvailableIngridents';
import Form from 'react-bootstrap/Form'

export default function Content() {
  return(
    <div id='content'>
      <h2>Avaiable Ingridents</h2>
      <p>Choose ingridents to make up the meat / organ / bone ratio. Upon selecting ingrident, enter weight in  </p>
      <section> 
        <Ingridents/>
      </section>
      
    </div>
  )
}