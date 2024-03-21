import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './providers/store/store.tsx'
import { router } from './providers/router/router.tsx'

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
