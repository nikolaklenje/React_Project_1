import './style.css';
import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App(){
  const cardElements = data.map(info=>{
    return(
     <Card 
     img={info.coverImg}
     rating={info.stats.rating}
    reviewCount={info.stats.reviewCount}
    location={info.location}
    title={info.title}
    price={info.price}
     
     />
    )


  })
  
  return(
  <div>
  <Navbar />
  <Hero />
  
  {cardElements}
  </div> 
)}
  
