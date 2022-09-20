import React from "react";


export default function Card (props){
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText= "Sold Out"
    }
        else if (props.item.location === "Online") {
            badgeText = "Online"
        }
    
    
    
    return(
    <div className="Card">
        <div className="Katie-text">
        <img src={`./${props.item.coverImg}`}className="katie" alt=""></img>
        {badgeText && <div class="top-left">{badgeText}</div>}</div>



        <div className="rating">
        <p><img src="images/star.png" className="star" alt=""></img>
        {props.rating} <span className="gray">({props.item.stats.reviewCount}) {props.item.location}</span></p></div>
        <p>{props.item.title}</p>
        <p><b>From ${props.item.stats.price}</b> / person</p>


    </div>
)}