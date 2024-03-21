import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../../../shared/hooks/redux-hooks.ts'
import { Component, FunctionComponent, ReactElement } from 'react'

interface IPrivateRoutesProps {
    component: ReactElement
}

export const PrivateRoute: FunctionComponent<IPrivateRoutesProps> = ({
    component,
}) => {
    const isAuth = useAppSelector((state) => state.userStore.user.isAuth)
    return isAuth ? (
        component ? (
            <Component />
        ) : (
            <Outlet />
        )
    ) : (
        <Navigate to={'/login'} replace />
    )
}
