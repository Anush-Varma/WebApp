import React from 'react';
import '../../css/tags.css';
import Button from './core/Button';
import { router } from '@inertiajs/react'

const Tags = ({tags}) => {
    const addTag = (tag) => {
        let url = new URL(window.location.href);

        if(url.searchParams.has("tags[]", tag)){
            url.searchParams.delete("tags[]", tag);
        } else {
            url.searchParams.append("tags[]", tag);
        }
        
        router.get(url);
    }

    const sortedTags = tags.map(tag => {
        let url = new URL(window.location.href);

        return {
            ...tag,
            isSelected: url.searchParams.has("tags[]", tag.name) ? 1 : 0
        }
    }).sort((a, b) => b.isSelected - a.isSelected);

    return(
        <div className="tagRow">
            {
                sortedTags.map((tag, i) => <Button 
                    className="tagButton" 
                    variant={tag.isSelected+1}
                    onClick={() => addTag(tag.name)}
                >
                    {tag.name}
                </Button>)
            }
        </div>
    )
}
export default Tags;