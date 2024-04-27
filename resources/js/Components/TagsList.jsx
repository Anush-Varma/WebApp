import React from 'react';
import '../../css/Tags.css';
import Button from './core/Button';

const Tags = () => {
    return(
        <div className="tagRow">
            <Button>
                Technology
            </Button>

            <Button>
                Politics
            </Button>

            <Button>
                Eco
            </Button>
        </div>
    )
}
export default Tags;