import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './providers/store/store.tsx'
import { router } from './providers/router/router.tsx'
import { AppLayout } from './layout/AppLayout.tsx'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from './context/ThemeContext.tsx'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <ErrorBoundary fallback={<div>Something went wrong:</div>}>
                    <AppLayout>
                        <Suspense fallback={<h1>Loading page...</h1>}>
                            <RouterProvider router={router} />
                        </Suspense>
                    </AppLayout>
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    )
}
