import { useState, useEffect } from "react"
import "../../css/tagInput.css"
import { BiX } from "react-icons/bi";

const useTag = () => {
    
}

const Tag = (props) => {
    return <div className="tag">
        <p>{props.name}</p>
        <BiX className="tagIcon" onClick={props.onClick}/>
    </div>
}

const TagInput = ({value=[], onChange}) => {
    const [tags, setTags] = useState(value);

    const keyDown = (event) => {
        if(event.key == "Enter") {
            let val = event.target.value;
            setTags(tags => [...tags, val]);
            event.target.value = "";

            event.preventDefault()
        }
    };

    useEffect(() => {
        onChange(tags)
    }, [tags])


    return <div className="tagInput">
        {
            tags.map((tag, i) => <Tag 
                name={tag}
                onClick={() => setTags(tags => [...tags.slice(0, i), ...tags.slice(i+1)])}
            />)
        }

        <input 
            placeholder="Add Tag"
            onKeyDown={keyDown}
        ></input>
    </div>
}

export default TagInput