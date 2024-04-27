import TopMenu from "@/Components/TopMenu";
import "../../css/layout.css"
import Layout from "./Layout";

const AppLayout = (props) => {
    return <div className="appLayout">
        <TopMenu/>

        <div className="appContent">
            {props.children}
        </div>
    </div>
}

export default AppLayout;