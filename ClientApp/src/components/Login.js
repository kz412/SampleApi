import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { submitLogin } from '../redux/actions';

const required = value => {
    return value ? undefined : 'Required';
}

const Login = ({ submitLogin }) => {
    return (
        <Form
            onSubmit={submitLogin}
            // validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field type="text" component="input" name="username" placeholder="Username" validate={required}></Field>
                    <Field type="password" component="input" name="password" placeholder="Password" validate={required}></Field>
                    <button type="submit">Login</button>
                </form>
            )}
        >

        </Form>
    );
}
export default connect(null, { submitLogin })(Login);
