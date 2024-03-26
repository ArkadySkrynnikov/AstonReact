import { useLocation } from 'react-router-dom'
import { FormLogin } from './FormLogin/FormLogin.tsx'
import { FormRegister } from './FormRegister/FormRegister.tsx'
import { SubmitHandler } from 'react-hook-form'
import { useSignIn } from '../../hooks/useSignIn.tsx'
import { useSignUp } from '../../hooks/useSignUp.tsx'
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'

export type IForm = {
    email: string
    password: string
    username?: string
    copyPassword?: string
}

export type Props = {
    title: 'Register' | 'Login'
    onSubmit: SubmitHandler<IForm>
}

export const Form = () => {
    const { pathname } = useLocation()
    const handleLogin = useSignIn()
    const handleRegister = useSignUp()

    return (
        <>
            {pathname === ROUTE_PATHS.LOGIN ? (
                <FormLogin title='Login' onSubmit={handleLogin} />
            ) : (
                <FormRegister title='Register' onSubmit={handleRegister} />
            )}
        </>
    )
}
