import TagsList from "@/Components/TagsList"
import '../../css/home.css';
import CardContainer from "@/Components/CardContainer";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";


const Home = ({posts, tags}) => {
    return(
        <AppLayout>
            <Head title="Dashboard"/>
            <TagsList tags={tags}/>
            <CardContainer data={posts}/>
        </AppLayout>
    )
}

export default Home;