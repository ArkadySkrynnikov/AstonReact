import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { setUser } from '../reducers/Auth/slices/userSlice.tsx'
import { useAppDispatch } from './redux-hooks.ts'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { IForm } from '../UI/Form/Form.tsx'

const UseSignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister: SubmitHandler<IForm> = async (data) => {
        const { email, password, username } = data
        const auth = getAuth()
        try {
            const userCredential = await createUserWithEmailAndPassword(
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

    return handleRegister
}

export default UseSignUp
