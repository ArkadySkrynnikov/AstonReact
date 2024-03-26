import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import {
    setEmailError,
    setPasswordError,
    setUser,
} from '../reducers/Auth/slices/userSlice.tsx'
import { useAppDispatch } from './redux-hooks.ts'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { IForm } from '../UI/Form/Form.tsx'
import { updateProfile } from 'firebase/auth'
import * as ROUTE_PATHS from '../../app/providers/router/routePaths/pathConstants.ts'

export const useSignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister: SubmitHandler<IForm> = async (data) => {
        const { email, password, username, copyPassword } = data
        const auth = getAuth()

        try {
            if (copyPassword !== password) {
                dispatch(setPasswordError('Passwords do not match'))
                return
            }

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            const user = userCredential.user

            await updateProfile(userCredential.user, {
                displayName: username,
            })

            dispatch(
                setUser({
                    isAuth: true,
                    email: user.email,
                    username: username,
                    copyPassword: copyPassword,
                    id: user.uid,
                    token: user.refreshToken,
                }),
            )
            navigate(ROUTE_PATHS.ROOT)
            /*eslint-disable @typescript-eslint/no-explicit-any */
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                dispatch(setEmailError('Email already in use'))
            } else {
                console.log(error)
            }
        }
    }

    return handleRegister
}
