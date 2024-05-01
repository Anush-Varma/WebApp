import { forwardRef } from "react"
import "../../../css/textarea.css"

const TextArea = forwardRef(({ className, ...props }, ref) => {
    return <textarea ref={ref} className={`textarea ${className ?? ""}`} {...props} />
})

export default TextArea