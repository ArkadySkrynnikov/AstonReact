import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from '../../../pages/PrivateRoute/ui/PrivateRoute.tsx'
import * as ROUTE_PATHS from './routePaths/pathConstants.ts'
import { lazy } from 'react'

const Layout = lazy(() => import('../../../pages/Layout/index.ts'))
const MainPage = lazy(() => import('../../../pages/MainPage/index.ts'))
const FavoritePage = lazy(() => import('../../../pages/FavoritePage/index.ts'))
const HistoryPage = lazy(() => import('../../../pages/HistoryPage/index.ts'))
const SearchPage = lazy(() => import('../../../pages/SearchPage/index.ts'))
const LoginPage = lazy(() => import('../../../pages/LoginPage/index.ts'))
const RegisterPage = lazy(() => import('../../../pages/RegisterPage/index.ts'))
const NotFoundPage = lazy(() => import('../../../pages/NotFoundPage/index.ts'))
const FilmPage = lazy(() => import('../../../pages/FilmPage/index.ts'))

export const router = createBrowserRouter([
    {
        path: ROUTE_PATHS.ROOT,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: ROUTE_PATHS.FAVORITES,
                element: <PrivateRoute component={<FavoritePage />} />,
            },
            {
                path: ROUTE_PATHS.HISTORY,
                element: <PrivateRoute component={<HistoryPage />} />,
            },
            {
                path: ROUTE_PATHS.SEARCH,
                element: <SearchPage />,
            },
            {
                path: ROUTE_PATHS.FILM_PAGE,
                element: <FilmPage />,
            },
        ],
    },
    {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
    },
    {
        path: ROUTE_PATHS.REGISTER,
        element: <RegisterPage />,
    },
    {
        path: ROUTE_PATHS.NOT_FOUND,
        element: <NotFoundPage />,
    },
])
