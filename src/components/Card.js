import React from "react";

export default function Card (props){return(
    <div className="Card">
        <div className="Katie-text">
        <img src={`./${props.img}`}className="katie" alt=""></img>
        <div class="top-left">SOLD OUT</div></div>
        <div className="rating">
        <p><img src="./star.png" className="star" alt=""></img>
        {props.rating} <span className="gray">({props.reviewCount}) {props.country}</span></p></div>
        <p>{props.title}</p>
        <p><b>From ${props.price}</b> / person</p>


    </div>
)}