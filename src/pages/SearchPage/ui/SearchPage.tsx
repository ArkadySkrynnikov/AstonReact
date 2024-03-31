import { useLocation } from 'react-router-dom'
import { Search } from '../../../widgets/defaultSearch/Search.tsx'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { useEffect } from 'react'
import { getFilmsData } from '../../../shared/reducers/Search/selectors/selectors.ts'
import FilmList from '../../../shared/UI/FilmList/FilmList.tsx'
import { fetchFilmsWithFilters } from '../../../shared/reducers/Search/slices/searchWithFilterSlice.ts'
import styled from 'styled-components'

export const SearchPage = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(getFilmsData)

    useEffect(() => {
        dispatch(fetchFilmsWithFilters(location.search))
    }, [dispatch, location.search])

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
