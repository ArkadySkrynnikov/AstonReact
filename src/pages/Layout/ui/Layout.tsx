import { removeUser } from '../../../shared/reducers/Auth/slices/userSlice.tsx'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { Outlet } from 'react-router-dom'
import { Header } from '../../../widgets/header/Header.tsx'
import { getUser } from '../../../shared/reducers/Auth/selectors/selectors.tsx'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase.ts'

export const Layout = () => {
    const dispatch = useAppDispatch()

    const user = useAppSelector(getUser)

    const logOutFn = () => {
        signOut(auth).then(function () {
            dispatch(removeUser())
        })
    }

    return (
        <>
            <Header
                username={user.username}
                isAuth={user.isAuth}
                logOutFn={logOutFn}
            />
            <Outlet />
        </>
    )
}
