import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Form from '@/Components/core/Form';
import Input from '@/Components/core/Input';
import Button from '@/Components/core/Button';
import "../../../css/center.css"

const Login = ({ canResetPassword }) => {
    const { data, setData, post, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        
        post(route('login'));
    };

    return <Layout className="center">
        <Head title="Enter the crib"/>
        <Form onSubmit={submit}>
            <h1>Login</h1>
            <Input 
                type="email"
                placeholder="Email"
                autocomplete="username"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)} 
            />

            <Input 
                type="password" 
                placeholder="Password"
                autocomplete="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)} 
            />

            {
                canResetPassword && <Link
                    href={route('password.request')}
                >
                    Forgot your password?
                </Link>
            }

            <Button 
                variant={2}
            >Login</Button>
            
            <Input
                type="checkbox"
                placeholder="Remember me"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
            />
            
            {
                <span>Dont have an account fool? <Link href={route('register')}>
                Register
            </Link></span>
            }
        </Form>
    </Layout>
}

export default Login;
