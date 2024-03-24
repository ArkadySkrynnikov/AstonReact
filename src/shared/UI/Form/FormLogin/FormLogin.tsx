import {
    AuthorizationField,
    AuthorizationForm,
    Button,
    ErrorField,
    Input,
    Label,
    LoginWrapper,
    Title,
} from '../form.styled.ts'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm, Props } from '../Form.tsx'
import { useAppSelector } from '../../../hooks/redux-hooks.ts'

const FormLogin = ({ title, onSubmit }: Props) => {
    const { userIsNotDefined } = useAppSelector((state) => state.userStore)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>()

    const submitHandler: SubmitHandler<IForm> = async (formData) => {
        onSubmit(formData)
    }

    return (
        <LoginWrapper>
            <Title>{title}</Title>
            <AuthorizationForm onSubmit={handleSubmit(submitHandler)}>
                <AuthorizationField>
                    <Input
                        {...register('email', { required: true })}
                        type='email'
                        name='email'
                        placeholder='example@mail.com'
                    />
                    {errors.email && (
                        <ErrorField>Email is required field!</ErrorField>
                    )}
                    <Label htmlFor='email'>Email</Label>
                </AuthorizationField>
                <AuthorizationField>
                    <Input
                        {...register('password', { required: true })}
                        type='password'
                        name='password'
                        placeholder='••••••••'
                    />
                    {errors.password && (
                        <ErrorField>Password is required field!</ErrorField>
                    )}
                    <Label htmlFor='password'>Password</Label>
                    {userIsNotDefined && (
                        <ErrorField>User invalid credential</ErrorField>
                    )}
                </AuthorizationField>
                <Button type='submit'>SUBMIT</Button>
            </AuthorizationForm>
            <Link to='/register'>Dont have account? Lets register!</Link>
        </LoginWrapper>
    )
}
export default FormLogin
