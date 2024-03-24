import { FunctionComponent, useEffect } from 'react'
import { useCheckAuth } from '../../shared/hooks/useCheckAuth.tsx'
import { useAppDispatch } from '../../shared/hooks/redux-hooks.ts'
import { setUser } from '../../shared/reducers/Auth/slices/userSlice.tsx'

type Props = {
    // eslint-disable-next-line no-undef
    children: JSX.Element
}
export const AppLayout: FunctionComponent<Props> = ({ children }) => {
    const signedUser = useCheckAuth()
    const dispatch = useAppDispatch()

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
        }
    }, [signedUser, dispatch])

    return children
}
