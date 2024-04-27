import React from 'react';
import '../../css/Tags.css';

const Tags = () => {
    return(
        <div className="tag-row">
            <button className="oval-button">
                Technology
            </button>
            
            <button className="oval-button">
                Politics
            </button>
            
            <button className="oval-button">
                Eco
            </button>
        </div>
    )
}
export default Tags;