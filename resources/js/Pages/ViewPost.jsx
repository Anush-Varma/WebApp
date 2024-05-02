import '..//..//css/createpost.css';
import AppLayout from "@/Layouts/AppLayout";
import CommentBox from '@/Components/CommentBox';
import "../../css/viewpost.css";
import Comments from '@/Components/Comments';
import { MdEdit } from "react-icons/md";
import { router } from '@inertiajs/react';


const ViewPost = ({ post: postData }) => {
    return <AppLayout>
        <div className="viewPost">
            <div className="postContent">
                <div className="header">
                    <h1>{postData.title}</h1>
                    {postData.isMe && <MdEdit 
                        className="edit" 
                        onClick={() => router.get(`/post/${postData.id}/edit`)}
                    ></MdEdit>}
                </div>
                
                <hr/>
                <b>{postData.tags.map(tag => `#${tag}`).join(" ")}</b>

                {
                    postData.image && <div className="image">
                        <img className="bg" src={postData.image}/>
                        <img className="fg" src={postData.image}/>
                    </div>
                }

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