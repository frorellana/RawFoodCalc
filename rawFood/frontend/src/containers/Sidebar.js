import React from "react";
import Calculator from "../components/Calculator";
import Selection from "./Selection";

export default function Sidebar({selections, onDelete, handleDecItems, handleSelectionUpdate}) {
  return(
    <aside id='sidebar'>
      <Selection handleSelectionUpdate={handleSelectionUpdate} selections={selections} onDelete={onDelete} handleDecItems={handleDecItems}/>
      <Calculator selections={selections} />
    </aside>
  );
}