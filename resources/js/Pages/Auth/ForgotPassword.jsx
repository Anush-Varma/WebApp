import { Head, useForm } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import Input from '@/Components/core/Input';
import Form from '@/Components/core/Form';
import "../../../css/center.css"
import Button from '@/Components/core/Button';

export default function ForgotPassword({ status }) {
    const { data, setData, post } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <Layout className="center">
            <Head title="Forgot Password"/>

            <Form onSubmit={submit}>
                <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <p style={{color: "red"}}>{errors.email}</p>

                <Button>
                    Email Password Reset Link
                </Button>
            </Form>
        </Layout>
    );
}
