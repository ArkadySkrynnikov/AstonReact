import { Search } from '../../../widgets/search/Search.tsx'
import styled from 'styled-components'
import { lazy, useEffect } from 'react'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { getCollectionsData } from '../../../shared/reducers/Search/selectors/selectors.ts'
import { fetchFilmsCollections } from '../../../shared/reducers/Search/slices/searchSlice.ts'
import { apiQueryCollections } from '../../../shared/consts/apiQueryStrings.ts'

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

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const FilmsContainer = styled.div`
    width: 1400px;
    display: flex;
    flex-flow: row wrap;
    gap: 40px;
`
