import { Navigate } from 'react-router-dom'
import { FC } from 'react'
import { useAppSelector } from '../../shared/hooks/redux-hooks.ts'

type Props = {
    Component: FC
}

const PrivateRoute: FC<Props> = ({ Component }) => {
    const { isAuth } = useAppSelector((state) => state.userStore.user)

    return isAuth ? <Component /> : <Navigate to='/login' />
}
export default PrivateRoute
