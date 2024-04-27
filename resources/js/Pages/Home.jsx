import TopMenu from "@/Components/TopMenu";
import TagsList from "@/Components/TagsList"
import '../../css/home.css';
import CardContainer from "@/Components/CardContainer";
import AppLayout from "@/Layouts/AppLayout";


const Home = ({posts}) => {
    return(
        <AppLayout>
            <TagsList/>
            <CardContainer data={posts}/>
        </AppLayout>
    )
}

export default Home;