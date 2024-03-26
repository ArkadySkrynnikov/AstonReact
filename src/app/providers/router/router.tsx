import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from '../../../pages/PrivateRoute/PrivateRoute.tsx'
import { FavoritePage } from '../../../pages/FavoritePage/FavoritePage.tsx'
import { HistoryPage } from '../../../pages/HistoryPage/HistoryPage.tsx'
import { SearchPage } from '../../../pages/SearchPage/SearchPage.tsx'
import { LoginPage } from '../../../pages/LoginPage/LoginPage.tsx'
import { RegisterPage } from '../../../pages/RegisterPage/RegisterPage.tsx'
import { NotFoundPage } from '../../../pages/NotFoundPage/NotFoundPage.tsx'
import { MainPage } from '../../../pages/MainPage/MainPage.tsx'
import * as ROUTE_PATHS from './routePaths/pathConstants.ts'

export const router = createBrowserRouter([
    {
        path: ROUTE_PATHS.ROOT,
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
