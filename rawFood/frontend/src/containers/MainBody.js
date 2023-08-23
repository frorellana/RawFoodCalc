import React, {useState} from 'react';
import Ingridents from '../containers/Ingridents';

export default function MainBody() {
  return(
    <div id='ingridentSection'>
      <h2>Ingridents</h2>
      <p>Choose ingridents to make up the meat / organ / bone ratio</p>
      <section> 
        <Ingridents/>
      </section>
      
    </div>
  )
}