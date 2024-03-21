import { IForm } from '../UI/Form/Form.tsx'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../reducers/Auth/slices/userSlice.tsx'
import { useAppDispatch } from './redux-hooks.ts'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'

const useSignIn = () => {
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
                    username: username,
                    id: user.uid,
                    token: user.refreshToken,
                }),
            )
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return handleLogin
}

export default useSignIn
