import React from "react";


export default function Card (props){
    let badgeText 
    if (props.openSpots === 0) {
        badgeText= "Sold Out"
    }
        else if (props.location === "Online") {
            badgeText = "Online"
        }
    
    
    
    return(
    <div className="Card">
        <div className="Katie-text">
        <img src={`./${props.img}`}className="katie" alt=""></img>
        {badgeText && <div class="top-left">{badgeText}</div>}</div>



        <div className="rating">
        <p><img src="images/star.png" className="star" alt=""></img>
        {props.rating} <span className="gray">({props.reviewCount}) {props.location}</span></p></div>
        <p>{props.title}</p>
        <p><b>From ${props.price}</b> / person</p>


    </div>
)}