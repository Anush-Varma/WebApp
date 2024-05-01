import React from 'react';
import '../../css/card.css';
import Card from '@/Components/Card'

export default function CardContainer({data}){
    return (
        <div className="card-container">
            {
                data.map(element => 
                    <Card onClick={() => window.location.replace(`/post/${element.id}`)}>
                        <p className="maxLines1">{element.tags.map(tag => `#${tag}`).join(" ")}</p>
                        <h2 className="maxLines3">{element.title}</h2>
                        <p className="maxLines3">{element.description}</p>
                    </Card>
                )
            }
        </div>
    );
}