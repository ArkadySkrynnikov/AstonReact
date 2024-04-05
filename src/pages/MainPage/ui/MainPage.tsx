import { lazy, useEffect } from 'react'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { getCollectionsData } from '../../../shared/reducers/Search/selectors/selectors.ts'
import { fetchFilmsCollections } from '../../../shared/reducers/Search/slices/searchSlice.ts'
import { apiQueryCollections } from '../../../shared/consts/apiQueryStrings.ts'
import { Container, FilmsContainer } from './main.styled.ts'
import { Search } from '../../../widgets/search/Search.tsx'

const FilmList = lazy(() => import('../../../shared/UI/FilmList/FilmList.tsx'))

export const MainPage = () => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(getCollectionsData)

    useEffect(() => {
        dispatch(
            fetchFilmsCollections(
                new URLSearchParams(apiQueryCollections).toString(),
            ),
        )
    }, [dispatch])

    return (
        <>
            <Search />
            <Container>
                <FilmsContainer>
                    <FilmList items={data.items} />
                </FilmsContainer>
            </Container>
        </>
    )
}
