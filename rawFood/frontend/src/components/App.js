import React, {useState} from 'react';
import Calculator from './Calculator';
import MainBody from '../containers/Content';
import SelectionDisplay from '../containers/Sidebar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return(
    <div id='main'>
      <header id='mainHeader'>
        <h1>Raw Food Calculator for Cats</h1>
      </header>
      <div id='frontDisplay'> 
        <MainBody />
        <SelectionDisplay />
      </div>
    </div>
  )
}