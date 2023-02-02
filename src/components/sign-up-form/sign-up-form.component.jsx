import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {SignUpContainer} from './sign-up-form..styles.jsx';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords doesnt match!');
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
                        
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert('Email already in use!');
            } else {
                console.log(`user creation encountered an error - ` + error);
            }
        }

    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    label='Display name'
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName} />

                <FormInput
                    label='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />

                <FormInput
                    label='Confirm password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword} />

                <Button type="submit">Sign up</Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;