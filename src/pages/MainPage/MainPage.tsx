import {
    useAppDispatch,
    useAppSelector,
} from '../../shared/hooks/redux-hooks.ts'
import { removeUser } from '../../shared/reducers/Auth/slices/userSlice.tsx'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.ts'

const MainPage = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.userStore.user)
    const handleSignOut = () => {
        signOut(auth).then(function () {
            dispatch(removeUser())
        })
    }

    return user?.isAuth ? (
        <div>
            <h1>Home page for authorized users!</h1>
            <h1>Hello {user.username}</h1>
            <Link to='/history'>Go to history</Link>
            <br />
            <Link to='/favorites'>Go to favorites</Link>
            <br />
            <button onClick={handleSignOut}>Log out</button>
        </div>
    ) : (
        <>
            <h1>Home page for unauthorized users!</h1>
            <Link to='/login'>SignIn</Link>
            <br />
            <Link to='/register'>SignUp</Link>
        </>
    )
}

export default MainPage
