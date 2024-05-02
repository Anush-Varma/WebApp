import '..//..//css/createpost.css';
import Button from "@/Components/core/Button";
import Form from "@/Components/core/Form";
import Input from "@/Components/core/Input";
import AppLayout from "@/Layouts/AppLayout";
import TextArea from "@/Components/core/TextArea";
import TagInput from "@/Components/TagInput";
import { useForm } from "@inertiajs/react";

const EditPost = (props) => {
    const { data, setData, post} = useForm({
        title: props.post.title,
        description: props.post.description,
        tags: props.post.tags,
    });

    const submit = (e) => {
        e.preventDefault();
        post(`/post/${props.post.id}/edit`)
    }

    return <AppLayout>
        <Form onSubmit={submit}>
            <h1>Edit Post</h1>
            <Input 
                type="text" 
                placeholder="Title" 
                value={data.title}
                onChange={(e) => setData('title', e.target.value)} 
            />

            <TagInput
                value={data.tags}
                onChange={(tags) => setData('tags', tags)} 
            />

            <TextArea
                placeholder="Description" 
                type="text" 
                rows={10}
                value={data.description}
                onChange={(e) => setData('description', e.target.value)} 
            />

            <Input 
                type="file"
                accept=".jpg,.jpeg,.png"
                placeholder="image" 
                onImageChange={(image) => setData('image', image)} 
            />
 
            <Button className='save' variant={2}>Save</Button>
        </Form>
    </AppLayout>
    
}

export default EditPost;