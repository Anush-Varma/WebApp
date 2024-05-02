import CardContainer from "@/Components/CardContainer";
import Button from "@/Components/core/Button";
import Form from "@/Components/core/Form";
import Input from "@/Components/core/Input";
import AppLayout from "@/Layouts/AppLayout";
import {useForm, router} from '@inertiajs/react';
import '../../css/profile.css';
import useScrollLoad from "@/hooks/useScrollLoad";

const UpdateDetails = ({email, name}) => {
    const { data, setData, patch, errors, } = useForm({
        name: name,
        email: email,
    });
    
    const save = (e) => {
        e.preventDefault()
        patch('/profile/edit')
    }

    return <Form>
        <h1>Update Details</h1>

        <Input
            type="text"
            placeholder="Account Name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <Input
            type="text"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.email}</p>}

        <Button onClick={save} variant={2}>Save</Button>
    </Form>
}

const UpdatePassword = () => {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        oldPassword: '',
        password: '',
        password_confirmation: '',
    });

    const save = (e) => {
        e.preventDefault()
        
        patch('/profile/password')
    }

    return <Form>
        <h1>Update Password</h1>

        <Input
            type="password"
            placeholder="Old Password"
            value={data.oldPassword}
            onChange={(e) => setData('oldPassword', e.target.value)}
        />
        {errors.oldPassword && <p style={{ color: "red" }}>{errors.oldPassword}</p>}
        <Input
            type="password"
            placeholder="New Password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <Input
            type="password"
            placeholder="confirm New Password"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
        />
        {errors.password_confirmation && <p style={{ color: "red" }}>{errors.password_confirmation}</p>}
        <Button onClick={save} variant={2}>Save</Button>
    </Form>
}

const Profile = ({posts, email, name}) => {
    const { data: allPosts, onScroll } = useScrollLoad({
        url: "/api/me/posts",
        initialData: posts
    })

    const logout = (e) => {
        router.post('logout')
    }

    return(
        <AppLayout onScroll={onScroll} >
            <div className="profileAppLayout">
                <div className="forms">
                    <UpdateDetails email={email} name={name}/>
                    <UpdatePassword/>
                </div>

                <Button onClick={logout} variant={1}>Logout</Button>
                <CardContainer data={allPosts}/>
            </div>
        </AppLayout>
        
    )
}

export default Profile;