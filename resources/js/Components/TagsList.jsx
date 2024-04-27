import React from 'react';
import '../../css/tags.css';
import Button from './core/Button';

const Tags = ({tags}) => {
    return(
        <div className="tagRow">
            {
                tags.map((tag, i) => <Button variant={i%2 + 1}>
                    {tag.name}
                </Button>)
            }
        </div>
    )
}
export default Tags;