import { BiX } from "react-icons/bi";
import "../../../css/input.css"
import { useRef, useEffect, useState } from "react";

const FileInput = ({onImageChange, ...props}) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        if(onImageChange) {
            onImageChange(image)
        }
    }, [image])

    const onInput = e => {
        setImage(e.target.files[0]);
    }

    return <label className="file">
        {
            image ? <div className="selected">
                <img className="bg" src={URL.createObjectURL(image)}/>
                <img className="fg" src={URL.createObjectURL(image)}/>
                <BiX className="remove" onClick={e => {
                    setImage(null);
                    e.preventDefault();
                }}/>
            </div> : <>
                <span>Upload image</span>
                <input onInput={onInput} {...props} />
            </>
        }
    </label>
}

const Input = ({ className, Icon, ...props }) => {
    // Youve heard of centering a div but have you styled a checkbox
    if(props.type == "checkbox") {
        return <label className="checkbox">
            <input className={`input ${className ?? ""}`} {...props} />
            <span class="checkmark"></span>
            <span>{props.placeholder}</span>
        </label>
    }

    if(props.type == "file") {
        return <FileInput {...props}/>
    }

    return <div className="input">
        { Icon && <Icon className="inputIcon" /> }
        <input className={className ?? ""} {...props} />
    </div>

}

export default Input