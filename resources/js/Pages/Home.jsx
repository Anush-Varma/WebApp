import TopMenu from "@/Components/TopMenu";
import TagsList from "@/Components/TagsList"
import '../../css/home.css';
import CardContainer from "@/Components/CardContainer";


const Home = () => {
    return(
        <div className='home-container'>
            <TopMenu/>
            <TagsList/>
            <CardContainer/>
            
        </div>
        
        
    )
}

export default Home;