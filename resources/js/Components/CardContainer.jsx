import React from 'react';
import '../../css/card.css';
import Card from '@/Components/Card'

export default function CardContainer({data}){
    return (
        <div className="card-container">
            {
                data.map(element => 
                    <Card>
                        <p>{element.tags.map(tag => `#${tag}`).join(" ")}</p>
                        <h2>{element.title}</h2>
                        <p>{element.description}</p>
                    </Card>
                )
            }
        </div>
    );
}