import {
    createContext,
    FunctionComponent,
    ReactElement,
    Suspense,
    useEffect,
    useMemo,
    useState,
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
    const [wantEnable, setWantEnable] = useState(false)

    const contextValue = useMemo((): FeatureFlagContextType => {
        return {
            toggleFeature: () => {
                setWantEnable(true)
            },
            isTelegramShareEnabled: data.isTelegramShareEnabled,
        }
    }, [data.isTelegramShareEnabled])

    useEffect(() => {
        if (wantEnable) {
            dispatch(fetchFeatureShare())
        }
    }, [dispatch, wantEnable])

    console.log(wantEnable)

    return (
        <Suspense fallback={<span>Loading...</span>}>
            <FeatureContext.Provider value={contextValue}>
                {children}
            </FeatureContext.Provider>
        </Suspense>
    )
}
