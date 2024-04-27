import "../../../css/form.css"

const Form = ({className, ...props}) => {
    return <form className={`form ${className ?? ""}`} {...props}/>
}

export default Form;