import React from 'react';
import '../../css/card.css';



export default function Card({className, ...props}){
    return (
        <div className={`card ${className ? className : ""}`} {...props}/>
    );
}