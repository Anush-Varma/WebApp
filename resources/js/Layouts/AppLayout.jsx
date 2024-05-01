import TopMenu from "@/Components/TopMenu";
import "../../css/layout.css"
import Layout from "./Layout";

const AppLayout = ({onScroll, ...props}) => {
    return <div className="appLayout">
        <TopMenu/>

        <div onScroll={onScroll} className="appContent">
            <div {...props} className="appContentInner"/>
        </div>
    </div>
}

export default AppLayout;