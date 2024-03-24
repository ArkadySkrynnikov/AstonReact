import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../../../pages/MainPage/MainPage.tsx'
import LoginPage from '../../../pages/LoginPage/LoginPage.tsx'
import RegisterPage from '../../../pages/RegisterPage/RegisterPage.tsx'
import FavoritePage from '../../../pages/FavoritePage/FavoritePage.tsx'
import HistoryPage from '../../../pages/HistoryPage/HistoryPage.tsx'
import SearchPage from '../../../pages/SearchPage/SearchPage.tsx'
import NotFoundPage from '../../../pages/NotFoundPage/NotFoundPage.tsx'
import { PrivateRoute } from '../../../pages/PrivateRoute/PrivateRoute.tsx'

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'favorites',
                element: <PrivateRoute component={<FavoritePage />} />,
            },
            {
                path: 'history',
                element: <PrivateRoute component={<HistoryPage />} />,
            },
            {
                path: 'search',
                element: <SearchPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
])
