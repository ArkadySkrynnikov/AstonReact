import { useLocation } from 'react-router-dom'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { useEffect } from 'react'
import { getFilmsData } from '../../../shared/reducers/Search/selectors/selectors.ts'
import FilmList from '../../../shared/UI/FilmList/FilmList.tsx'
import { FilmsContainer } from './search.styled.ts'
import { fetchFilmsList } from '../../../shared/reducers/Search/slices/searchSlice.ts'
import { Search } from '../../../widgets/search/Search.tsx'
import { Container } from '../../MainPage/ui/main.styled.ts'

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
