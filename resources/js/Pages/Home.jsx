import {useState, useEffect} from "react";
import TagsList from "@/Components/TagsList"
import '../../css/home.css';
import CardContainer from "@/Components/CardContainer";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import useScrollLoad from "@/hooks/useScrollLoad";


const Home = (props) => {
    const { loading, data, onScroll } = useScrollLoad({
        url: "/api/posts",
        initialData: props.posts
    })

    return(
        <AppLayout onScroll={onScroll}>
            <Head title="Dashboard"/>
            <TagsList tags={props.tags}/>
            <CardContainer data={data}/>
            { loading && <p>loading...</p> }
        </AppLayout>
    )
}

export default Home;