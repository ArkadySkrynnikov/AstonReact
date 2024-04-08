import {
    AuthorizationField,
    AuthorizationForm,
    ErrorField,
    Input,
    Label,
    LoginWrapper,
    Title,
} from '../form.styled.ts'
import { Link } from '../../Link/Link.tsx'
import { Button } from '../../button/Button.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm, Props } from '../Form.tsx'
import * as ROUTE_PATHS from '../../../../app/providers/router/routePaths/pathConstants.ts'
import { useAppSelector } from '../../../hooks/redux-hooks.ts'
import { getUserIsNotDefined } from '../../../reducers/Auth/selectors/selectors.ts'

export const FormLogin = ({ title, onSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>()
    const userIsNotDefined = useAppSelector(getUserIsNotDefined)
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
                <Button variant='primary'>SUBMIT</Button>
                <Link type='route' to={ROUTE_PATHS.REGISTER}>
                    Dont have account? Lets register!
                </Link>
            </AuthorizationForm>
        </LoginWrapper>
    )
}
