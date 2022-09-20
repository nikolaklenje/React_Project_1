import './style.css';
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App(){
  const cardElements = data.map(item=>{
    return(
     <Card 
     key = {item.id}
       {...item}//<== Equal to ==>  item = {item}
     
     />
    )


  })
  
  return(
  <div>
  <Navbar />
  <Hero />
  <div className="cards-list">
{cardElements}
  </div>
  </div> 
)}
  
