import "../../css/layout.css"

const Layout = (props) => {
    return <div className={`layout ${props.className ?? ""}`}>
        {props.children}
    </div>
}

export default Layout;