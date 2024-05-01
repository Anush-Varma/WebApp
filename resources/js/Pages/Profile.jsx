import CardContainer from "@/Components/CardContainer";
import Button from "@/Components/core/Button";
import Form from "@/Components/core/Form";
import Input from "@/Components/core/Input";
import AppLayout from "@/Layouts/AppLayout";
import {useForm } from '@inertiajs/react';
import '../../css/profile.css';
import useScrollLoad from "@/hooks/useScrollLoad";

const Profile = ({posts, email, name}) => {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        name: name,
        email: email,
        password: '',
        password_confirmation: '',
    });
    
    const { data: allPosts, onScroll } = useScrollLoad({
        url: "/api/me/posts",
        initialData: posts
    })

    const save = (e) => {
        patch('/profile')
    }

    const logout = (e) => {
        post('logout')
    }


    return(
        <AppLayout onScroll={onScroll} >
            <div className="profileAppLayout">
                <Form>
                    <Input 
                        type="text"
                        placeholder="Account Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)} 
                    />

                    {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                    <Input
                        type="text"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    {errors.name && <p style={{color: "red"}}>{errors.email}</p>}
                    <Input
                        type="password"
                        placeholder="New Password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    {errors.name && <p style={{color: "red"}}>{errors.password}</p>}
                    <Input
                        type="password"
                        placeholder="Re-Write New Password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                    {errors.name && <p style={{color: "red"}}>{errors.password_confirmation}</p>}

                    <Button onClick={save} className='save' variant={2}>Save</Button>

                    <Button onClick={logout} className='logout' variant={1}>Logout</Button>
                </Form>
                <CardContainer className="userCards" data={allPosts}/>
            </div>
        </AppLayout>
        
    )
}

export default Profile;