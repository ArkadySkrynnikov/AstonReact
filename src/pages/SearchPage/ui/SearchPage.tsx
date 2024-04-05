import { useLocation } from 'react-router-dom'
import { Search } from '../../../widgets/defaultSearch/Search.tsx'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { useEffect } from 'react'
import { getFilmsData } from '../../../shared/reducers/Search/selectors/selectors.ts'
import FilmList from '../../../shared/UI/FilmList/FilmList.tsx'
import { fetchFilmsList } from '../../../shared/reducers/Search/slices/search.ts'
import { Container, FilmsContainer } from './search.styled.ts'

export const SearchPage = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(getFilmsData)

    useEffect(() => {
        dispatch(fetchFilmsList(location.search))
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
