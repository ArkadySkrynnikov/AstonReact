import { IForm } from '../UI/Form/Form.tsx'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {
    setUser,
    setUserIsNotDefined,
} from '../reducers/Auth/slices/userSlice.tsx'
import { useAppDispatch } from './redux-hooks.ts'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import * as ROUTE_PATHS from '../../app/providers/router/routePaths/pathConstants.ts'

export const useSignIn = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogin: SubmitHandler<IForm> = async (data) => {
        const { email, password, username } = data
        const auth = getAuth()
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            )
            const user = userCredential.user

            dispatch(
                setUser({
                    isAuth: true,
                    email: user.email,
                    username: username || user.displayName,
                    id: user.uid,
                    token: user.refreshToken,
                }),
            )
            navigate(ROUTE_PATHS.ROOT)
            /*eslint-disable @typescript-eslint/no-explicit-any */
        } catch (error: any) {
            if (error.code === 'auth/invalid-credential') {
                dispatch(setUserIsNotDefined())
            } else {
                console.error(error)
            }
        }
    }
    return handleLogin
}
