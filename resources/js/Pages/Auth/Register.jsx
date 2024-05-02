import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Form from '@/Components/core/Form';
import Input from '@/Components/core/Input';
import Button from '@/Components/core/Button';
import "../../../css/center.css"

const Register = () => {
    const { data, setData, post,errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        
        post(route('register'));
    };

    return <Layout className="center">
        <Head title="Register"/>
        <Form onSubmit={submit}>
            <h1>Create an account</h1>
            <Input 
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)} 
            />
            
            {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

            <Input 
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)} 
            />
            
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

            <Input 
                type="password" 
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)} 
            />
            
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

            <Input 
                type="password" 
                placeholder="Password Confirmation"
                value={data.password_confirmation}
                onChange={(e) => setData('password_confirmation', e.target.value)} 
            />
            
            {errors.password_confirmation && <p style={{color: "red"}}>{errors.password_confirmation}</p>}

            <Button variant={2}>Register</Button>
            
            {
                <Link href={route('login')}>
                    Already have an account?
                </Link>
            }
        </Form>
    </Layout>
}

export default Register;







