import {
    AuthorizationField,
    AuthorizationForm,
    Button,
    Input,
    Label,
    LoginWrapper,
    Title,
} from '../form.styled.ts'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IForm, Props } from '../Form.tsx'

const FormRegister = ({ title, onSubmit }: Props) => {
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
                        <span>Username is required field!</span>
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
                    {errors.email && <span>Email is required field!</span>}
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
                        <span>Password is required field!</span>
                    )}
                    <Label htmlFor='password'>Password</Label>
                </AuthorizationField>

                <Button type='submit'>SUBMIT</Button>
            </AuthorizationForm>
            <Link to='/login'>Already have an account? Sign in!</Link>
        </LoginWrapper>
    )
}
export default FormRegister
