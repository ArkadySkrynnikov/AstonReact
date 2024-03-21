import { useLocation } from 'react-router-dom'
import FormLogin from './FormLogin/FormLogin.tsx'
import FormRegister from './FormRegister/FormRegister.tsx'
import { SubmitHandler } from 'react-hook-form'
import useSignIn from '../../hooks/useSignIn.tsx'
import useSignUp from '../../hooks/useSignUp.tsx'

export interface IForm {
    email: string
    password: string
    username?: string
}

export interface Props {
    title: 'Register' | 'Login'
    onSubmit: SubmitHandler<IForm>
}

const Form = () => {
    const { pathname } = useLocation()
    const handleLogin = useSignIn()
    const handleRegister = useSignUp()

    return (
        <>
            {pathname === '/login' ? (
                <FormLogin title='Login' onSubmit={handleLogin} />
            ) : (
                <FormRegister title='Register' onSubmit={handleRegister} />
            )}
        </>
    )
}

export default Form
