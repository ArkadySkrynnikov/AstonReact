import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './providers/store/store.tsx'
import { router } from './providers/router/router.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { FeatureFlagsProvider } from './context/FeatureFlag.tsx'

export const App = () => {
    return (
        <ErrorBoundary fallback={<div>Loading...</div>}>
            <ThemeProvider>
                <Provider store={store}>
                    <FeatureFlagsProvider>
                        <RouterProvider router={router} />
                    </FeatureFlagsProvider>
                </Provider>
            </ThemeProvider>
        </ErrorBoundary>
    )
}
