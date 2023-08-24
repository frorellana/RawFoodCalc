import React from "react";
import Calculator from "../components/Calculator";
import Selection from "./Selection";

export default function Sidebar() {
  return(
    <aside id='sidebar'>
      <Selection />
      <Calculator />
    </aside>
  );
}