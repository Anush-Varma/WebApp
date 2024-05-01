import { CgProfile } from "react-icons/cg";
import { FiPlusCircle, FiMinusCircle  } from "react-icons/fi";
import "../../css/comments.css"
import CommentBox from "./CommentBox";
import { useState, useEffect } from "react";
import timeAgo from "@/utils/timeago";


const Comment = ({comment}) => {
    const [loading, setLoading] = useState(false);
    const [children, setChildren] = useState([]);
    const [showReplies, setShowReplies] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, [children])

    const fetchChildren = async (refresh = false) => {
        if(children.length > 0 && !refresh) return;

        setLoading(true);

        let response = await fetch(`/api/comments/replies?id=${comment.id}`);
        let data = await response.json();

        setChildren(data.comments);
    }

    const displayReplies = async (refresh = false) => {
        fetchChildren(refresh);
        setShowReplies(true)
    }

    const hideReplies = () => {
        setShowReplies(false)
    }

    return <div className="comment">
        <div className="commentHeader">
            <CgProfile className="profilePic"/>
            <p className="name">{comment.user_name}</p>
            <p className="date">{timeAgo(new Date(comment.created_at))}</p>
        </div>

        <div className="commentContentOuter">
            <div className="vline">
                {
                    showReplies ?
                        <FiMinusCircle onClick={hideReplies} className="expand"/> :
                        <FiPlusCircle onClick={displayReplies} className="expand"/>
                }
            </div>

            <div className="commentContent">
                <p className="description">{comment.description}</p>
                <CommentBox
                    type="comment"
                    id={comment.id}
                    onSuccess={() => displayReplies(true)}
                />

                {
                    showReplies && <div className="replies">
                        {
                            loading ? 
                                <p>Loading . . .</p> :
                                children.map(fakeComment =>
                                    <Comment comment={fakeComment}/>
                                )
                        }
                    </div>
                }
            </div>
        </div>
    </div>
}

const Comments = ({ comments }) => {
    return <div className="commentsContainer">
        {
            comments.map(comment => <Comment comment={comment}/>)
        }
    </div>
}

export default Comments;