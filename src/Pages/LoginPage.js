import React from 'react'
import FormComp from '../Components/Entry Page/FormComp'

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
        <FormComp
            ui={ui} />
    )
}
