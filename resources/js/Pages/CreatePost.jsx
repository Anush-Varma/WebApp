import '..//..//css/createpost.css';
import Button from "@/Components/core/Button";
import Form from "@/Components/core/Form";
import Input from "@/Components/core/Input";
import AppLayout from "@/Layouts/AppLayout";
import TextArea from "@/Components/core/TextArea";
import TagInput from "@/Components/TagInput";
import { useForm } from "@inertiajs/react";


const CreatePost = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        tags: [],
        remember: false,
    });

    return <AppLayout>
        <Form>
            <h1>Create Post</h1>
            <Input 
                type="text" 
                placeholder="Title" 
                value={data.title}
                onChange={(e) => setData('title', e.target.value)} 
            />

            <TagInput
                onChange={(tags) => setData('tags', tags)} 
            />

            <TextArea
                placeholder="Description" 
                type="text" 
                rows={10}
                value={data.description}
                onChange={(e) => setData('description', e.target.value)} 
            />
 
            <Button className='save' variant={2}>Save</Button>
        </Form>
    </AppLayout>
    
}

export default CreatePost;