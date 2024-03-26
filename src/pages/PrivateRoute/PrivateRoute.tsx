import { useNavigate } from 'react-router-dom'
import { FunctionComponent, ReactNode, useEffect } from 'react'
import * as ROUTE_PATHS from '../../app/providers/router/routePaths/pathConstants.ts'

type IPrivateRoutesProps = {
    component: ReactNode
}

export const PrivateRoute: FunctionComponent<IPrivateRoutesProps> = ({
    component,
}) => {
    const navigate = useNavigate()
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    useEffect(() => {
        if (!isAuthenticated) {
            navigate(ROUTE_PATHS.LOGIN)
        }
    }, [isAuthenticated, navigate])

    return component
}
