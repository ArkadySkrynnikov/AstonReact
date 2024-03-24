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

const FormRegister = ({ title, onSubmit }: Props) => {
    const { emailError, passwordError } = useAppSelector(
        (state) => state.userStore,
    )

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
                        {...register('username', { required: true })}
                        type='text'
                        name='username'
                    />
                    {errors.username && (
                        <ErrorField>Username is required field!</ErrorField>
                    )}
                    <Label htmlFor='username'>Username</Label>
                </AuthorizationField>
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
                    {emailError && <ErrorField>{emailError}</ErrorField>}
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
                </AuthorizationField>
                <AuthorizationField>
                    <Input
                        {...register('copyPassword', { required: true })}
                        type='password'
                        name='copyPassword'
                        placeholder='••••••••'
                    />
                    {errors.password && (
                        <ErrorField>Password is required field!</ErrorField>
                    )}
                    <Label htmlFor='password'>Confirm password</Label>
                </AuthorizationField>
                {passwordError && <ErrorField>{passwordError}</ErrorField>}{' '}
                <Button type='submit'>SUBMIT</Button>
            </AuthorizationForm>
            <Link to='/login'>Already have an account? Sign in!</Link>
        </LoginWrapper>
    )
}
export default FormRegister
