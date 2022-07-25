import React from 'react'
import FormComponent from '../Components/Entry Page/FormComponent'

const ui = {
    headerTitle: "Welcome back",
    headerCaption: "lcome back! Please enter your details.",
    buttonText: "Sign in",
    text: "Don't",
    hrefText: "Sign up",
    href: "register",
}

export default function LoginPage() {
    return (
        <FormComponent
            ui={ui} />
    )
}
