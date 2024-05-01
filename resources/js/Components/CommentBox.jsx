import { useState, useEffect, useRef } from "react";
import "../../css/commentbox.css"
import TextArea from "./core/TextArea";
import Input from "./core/Input";
import { BiCommentDetail } from "react-icons/bi";
import Button from "./core/Button";
import { useForm } from "@inertiajs/react";

const CommentBox = ({type, id, onSuccess}) => {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        id,
        type,
        description: ""
    });

    const ref = useRef(null);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if(selected) {
            ref.current.focus();
        }
    }, [selected])

    const onClick = () => {
        setSelected(false);
    }

    useEffect(() => {
        window.addEventListener("click", onClick)

        return () => {
            window.removeEventListener("click", onClick)
        }
    }, [])

    if(!selected) {
        return <Input
            Icon={BiCommentDetail}
            onFocus={() => setSelected(true)}
            placeholder="Create Comment"
        />
    }

    const submit = (e) => {
        post("/comment/create", {
            onSuccess
        });
    }

    return <div 
        className="commentBox" 
        onClick={e => e.stopPropagation()}
    >
        <TextArea
            ref={ref}
            placeholder="Comment"
            rows={3}
            onChange={e => setData("description", e.target.value)}
        />

        <div tabIndex="0" className="commentInputs">
            <Button onClick={submit}>Comment</Button>
        </div>
    </div>
}

export default CommentBox;
