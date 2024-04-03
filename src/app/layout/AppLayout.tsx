import { FunctionComponent, ReactElement, useEffect } from 'react'
import { useCheckAuth } from '../../shared/hooks/useCheckAuth.tsx'
import { useAppDispatch } from '../../shared/hooks/redux-hooks.ts'
import { setUser } from '../../shared/reducers/Auth/slices/userSlice.tsx'
import { getFavoriteFromFirebaseDB } from '../../shared/reducers/Favorite/actions/FavoriteActions.tsx'

type Props = {
    children: ReactElement
}
export const AppLayout: FunctionComponent<Props> = ({ children }) => {
    const dispatch = useAppDispatch()
    const signedUser = useCheckAuth()

    useEffect(() => {
        if (signedUser) {
            dispatch(
                setUser({
                    isAuth: true,
                    email: signedUser.email,
                    username: signedUser.displayName,
                    id: signedUser.uid,
                    token: signedUser.refreshToken,
                }),
            )
            localStorage.setItem('isAuthenticated', 'true')
            dispatch(getFavoriteFromFirebaseDB())
        }
    }, [signedUser, dispatch])

    return children
}
