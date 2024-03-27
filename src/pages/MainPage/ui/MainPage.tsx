import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { removeUser } from '../../../shared/reducers/Auth/slices/userSlice.tsx'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase.ts'
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'
import { getUser } from '../../../shared/reducers/Auth/selectors/selectors.tsx'

export const MainPage = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(getUser)
    const handleSignOut = () => {
        signOut(auth).then(function () {
            dispatch(removeUser())
        })
    }

    return user?.isAuth ? (
        <div>
            <h1>Home page for authorized users!</h1>
            <h1>Hello {user.username}</h1>
            <Link to={ROUTE_PATHS.HISTORY}>Go to history</Link>
            <Link to={ROUTE_PATHS.FAVORITES}>Go to favorites</Link>
            <button onClick={handleSignOut}>Log out</button>
        </div>
    ) : (
        <>
            <h1>Home page for unauthorized users!</h1>
            <Link to={ROUTE_PATHS.LOGIN}>SignIn</Link>
            <Link to={ROUTE_PATHS.REGISTER}>SignUp</Link>
        </>
    )
}
