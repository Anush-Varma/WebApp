import "../../../css/button.css"

const Button = ({ className, variant=1, ...props }) => {
    return <button className={`button button-variant-${variant} ${className ?? ""}`} {...props} />
}

export default Button