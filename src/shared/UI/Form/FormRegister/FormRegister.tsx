import {
    AuthorizationField,
    AuthorizationForm,
    ErrorField,
    Input,
    Label,
    LoginWrapper,
    Title,
} from '../form.styled.ts'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm, Props } from '../Form.tsx'
import * as ROUTE_PATHS from '../../../../app/providers/router/routePaths/pathConstants.ts'
import { useAppSelector } from '../../../hooks/redux-hooks.ts'
import {
    getEmailError,
    getPasswordError,
} from '../../../reducers/Auth/selectors/selectors.tsx'
import { Link } from '../../Link/Link.tsx'
import { Button } from '../../button/Button.tsx'

export const FormRegister = ({ title, onSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>()
    const emailError = useAppSelector(getEmailError)
    const passwordError = useAppSelector(getPasswordError)

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
                {passwordError && <ErrorField>{passwordError}</ErrorField>}
                <Button variant='primary'>SUBMIT</Button>
            </AuthorizationForm>
            <Link type='route' to={ROUTE_PATHS.LOGIN}>
                Already have an account? Sign in!
            </Link>
        </LoginWrapper>
    )
}
