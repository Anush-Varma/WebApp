import '..//..//css/createpost.css';
import AppLayout from "@/Layouts/AppLayout";
import CommentBox from '@/Components/CommentBox';
import "../../css/viewpost.css";
import Comments from '@/Components/Comments';


const ViewPost = ({ post: postData }) => {
    return <AppLayout>
        <div className="viewPost">
            <div className="postContent">
                <h1>{postData.title}</h1>
                <hr/>
                <b>{postData.tags.map(tag => `#${tag}`).join(" ")}</b>
                {
                    postData.description.split("\n").map(line =>
                        <p>{line}</p>
                    )
                }
            </div>

            <CommentBox type="post" id={postData.id}/>
            <Comments comments={postData.comments}/>
        </div>
    </AppLayout>
    
}

export default ViewPost;