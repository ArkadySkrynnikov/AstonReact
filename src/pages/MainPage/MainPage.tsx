import { useAppDispatch } from '../../shared/hooks/redux-hooks.ts'
import useAuth from '../../shared/hooks/useAuth.tsx'
import { removeUser } from '../../shared/reducers/Auth/slices/userSlice.tsx'
import { Link } from 'react-router-dom'

const MainPage = () => {
    const dispatch = useAppDispatch()
    const { isAuth, username } = useAuth()
    return isAuth ? (
        <div>
            <h1>Home page for authorized users!</h1>
            <h1>Hello {username}</h1>
            <button onClick={() => dispatch(removeUser())}>Log out</button>
        </div>
    ) : (
        <>
            <h1>Home page for unauthorized users!</h1>
            <Link to='/login'>SignIn</Link>
            <Link to='/register'>SignUp</Link>
        </>
    )
}

export default MainPage
