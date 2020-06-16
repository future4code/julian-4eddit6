import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { LoginForm } from './styles';
import { useForm } from '../../hooks/useForm';

const LoginPage = () => {
    const history = useHistory()

    const [form, onChangeInput] = useForm({
        email: "",
        password: ""
    })

    const onSubmitLogin = event => {
        event.preventDefault()
        
        const body = {
            email: form.email,
            password: form.password
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`, body).then(response => {
            console.log(response.data.token)
            window.localStorage.setItem('token', response.data.token)
            history.push('/feed')
        })
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmitLogin}>
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
            <button type="submit">Entrar</button>
            <Link to={'/cadastro'}>
                <button>Cadastrar</button>
            </Link>
        </LoginForm>
        
    </div>
}

export default LoginPage