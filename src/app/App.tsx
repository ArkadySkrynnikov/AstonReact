import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './providers/store/store.tsx'
import { router } from './providers/router/router.tsx'
import { AppLayout } from './layout/AppLayout.tsx'

function App() {
    return (
        <Provider store={store}>
            <AppLayout>
                <RouterProvider router={router} />
            </AppLayout>
        </Provider>
    )
}

export default App
