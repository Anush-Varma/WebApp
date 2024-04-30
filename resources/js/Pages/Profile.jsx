import CardContainer from "@/Components/CardContainer";
import Button from "@/Components/core/Button";
import Form from "@/Components/core/Form";
import Input from "@/Components/core/Input";
import AppLayout from "@/Layouts/AppLayout";
import {useForm } from '@inertiajs/react';
import '../../css/profile.css';

const Profile = ({posts, tags, email, name}) => {
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        name: name,
        email: email,
        password: '',
        password_confirmation: '',
    });
    const save = (e) => {

        patch('/profile')

        // put(route('password.update'), {
        //     preserveScroll: true,
        //     onSuccess: () => reset(),
        //     onError: (errors) => {
        //         if (errors.password) {
        //             reset('password', 'password_confirmation');
        //         }

        //         if (errors.current_password) {
        //             reset('current_password');                 
        //         }
        //     },
        // });
        
    }

    const logout = (e) => {
        post('logout')
    }


    return(
        <AppLayout>
            <Form className="accountInfo">
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
            <CardContainer className="userCards" data={posts}/>
        </AppLayout>
        
    )
}

export default Profile;