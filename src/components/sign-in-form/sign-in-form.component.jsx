import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ButtonContainer, SignUpContainer } from './sign-in-form..styles.jsx';

import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };


    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            navigate('/');
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email!');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(error);
            }
            console.log(error);
        };

    };

    return (
        <SignUpContainer>
            <h2>I already habe an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>

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

                <ButtonContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonContainer>
            </form>
        </SignUpContainer>
    );
};

export default SignInForm;