import React, {useState} from 'react';
import Calculator from './Calculator';
import MainBody from '../containers/MainBody';
import SelectionDisplay from '../containers/SelectionDisplay';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return(
    <div id='main'>
      <header id='mainHeader'>
        <h1>Raw Food Calculator for Catsbbijlni</h1>
      </header>
      <div id='frontDisplay'> 
        <MainBody />
        <SelectionDisplay />

      </div>


      
    </div>
  )
}