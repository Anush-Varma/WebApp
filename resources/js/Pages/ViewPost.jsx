import '..//..//css/createpost.css';
import AppLayout from "@/Layouts/AppLayout";
import CommentBox from '@/Components/CommentBox';
import "../../css/viewpost.css";


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

            <div>
                {
                    postData.comments.map(comment => <div>
                        <p>{comment.user_name}</p>
                        <p>{comment.description}</p>
                    </div>)
                }
            </div>
        </div>
    </AppLayout>
    
}

export default ViewPost;