import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import Sidebar from '../containers/Sidebar';
import { v4 as uuidv4 } from "uuid";


export default function App() {

  const [selections, setSelections] = useState([]);
  function handleNewSelections(newData) {
    // need to generate unique ids for each new data
    const uniqueId = uuidv4();
  
    // Create a new data item with the generated ID and other properties
    const newDataItem = {
      id: uniqueId,
       ...newData
    };

  // Add the new data item to the data state
  console.log(newDataItem)
    setSelections([...selections, newDataItem]);
  }

  function handleSelectionUpdate(inputId, newAmount) {
    const newSelections = [...selections]
    for(let i = 0; i < newSelections.length; i++) {
      const selection = newSelections[i];
      if(selection.id === inputId) {
        selection.amount = newAmount;
        break;
      }
    }
    setSelections(newSelections);
  }


  function onDelete(deleteId) {
    setSelections(selections.filter(item => item.id != deleteId))
    console.log('i will be displayed', selections)
  }
  return(
    <>
      <Routes>
        <Route path="/" element={<MainContainer handleSelectionUpdate={handleSelectionUpdate} handleNewSelections={handleNewSelections} selections={selections} onDelete={onDelete}/>} />
        <Route path="/cart" element={<Sidebar selections={selections} onDelete={onDelete} />} />
      </Routes>
    </>
  );
}