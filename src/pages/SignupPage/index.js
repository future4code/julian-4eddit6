import React, { useState } from 'react'
import axios from 'axios'
import { SignupForm } from './styles'
import { useForm } from '../../hooks/useForm'

const SignupPage = () => {
    const [form, onChangeInput] = useForm({
        email: "",
        password: "",
        username: ""
    })

    const onSubmitSignup = event => {
        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password,
            username: form.username
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body).then(response => console.log(response)).catch(error => console.log(error))
    }

    return <div>
        <h1>Cadastro</h1>
        <SignupForm onSubmit={onSubmitSignup}>
            <input 
                placeholder="Nome de usuário" 
                type="text" 
                value={form.username} 
                onChange={onChangeInput}
                name="username"
            />
            <input 
                placeholder="Email" 
                type="email" 
                value={form.email} 
                onChange={onChangeInput}
                name="email"
            />
            <input 
                placeholder="Senha" 
                type="password" 
                value={form.password} 
                onChange={onChangeInput}
                name="password"
            />
            <button type="submit">Cadastrar</button>
        </SignupForm>
    </div>
}

export default SignupPage