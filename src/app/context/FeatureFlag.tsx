import {
    createContext,
    FunctionComponent,
    ReactElement,
    Suspense,
    useMemo,
} from 'react'
import {
    useAppDispatch,
    useAppSelector,
} from '../../shared/hooks/redux-hooks.ts'
import { fetchFeatureShare } from '../../shared/reducers/Feature/slices/featureSlice.ts'
import { getFeature } from '../../shared/reducers/Feature/selectos/selectors.ts'

type FeatureFlagContextType = {
    isTelegramShareEnabled: boolean
    toggleFeature: () => void
}

export const FeatureContext = createContext<FeatureFlagContextType>({
    isTelegramShareEnabled: false,
    toggleFeature: () => {},
})

type FeatureFlagsProviderProps = {
    children: ReactElement
}

export const FeatureFlagsProvider: FunctionComponent<
    FeatureFlagsProviderProps
> = ({ children }) => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(getFeature)

    const contextValue = useMemo((): FeatureFlagContextType => {
        return {
            toggleFeature: () => {
                dispatch(fetchFeatureShare())
            },
            isTelegramShareEnabled: data.isTelegramShareEnabled,
        }
    }, [data.isTelegramShareEnabled, dispatch])

    return (
        <Suspense fallback={<span>Loading...</span>}>
            <FeatureContext.Provider value={contextValue}>
                {children}
            </FeatureContext.Provider>
        </Suspense>
    )
}
