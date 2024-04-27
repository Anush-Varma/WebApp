import "../../../css/textarea.css"

const TextArea = ({ className, ...props }) => {
    return <textarea className={`textarea ${className ?? ""}`} {...props} />
}

export default TextArea