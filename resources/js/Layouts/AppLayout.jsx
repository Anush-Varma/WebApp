import TopMenu from "@/Components/TopMenu";
import "../../css/layout.css"
import Layout from "./Layout";

const AppLayout = (props) => {
    return <div className="appLayout">
        <TopMenu/>

        <div className="appContent">
            <div className="appContentInner">
                {props.children}
            </div>
        </div>
    </div>
}

export default AppLayout;