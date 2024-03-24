import { useNavigate } from 'react-router-dom'
import { FunctionComponent, ReactElement, useEffect } from 'react'

interface IPrivateRoutesProps {
    component: ReactElement
}

export const PrivateRoute: FunctionComponent<IPrivateRoutesProps> = ({
    component,
}) => {
    const navigate = useNavigate()
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return component
}
