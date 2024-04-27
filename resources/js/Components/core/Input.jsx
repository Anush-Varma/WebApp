import "../../../css/input.css"

const Input = ({ className, Icon, ...props }) => {
    // Youve heard of centering a div but have you styled a checkbox
    if(props.type == "checkbox") {
        return <label className="checkbox">
            <input className={`input ${className ?? ""}`} {...props} />
            <span class="checkmark"></span>
            <span>{props.placeholder}</span>
        </label>
    }

    return <div class="input">
        { Icon && <Icon className="inputIcon" /> }
        <input className={className ?? ""} {...props} />
    </div>

}

export default Input