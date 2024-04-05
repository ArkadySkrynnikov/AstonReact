import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { fetchFilmById } from '../../../shared/reducers/Search/slices/searchByIdSlice.ts'
import { getFilmByID } from '../../../shared/reducers/Search/selectors/selectors.ts'
import {
    FilmCountry,
    FilmDescription,
    FilmEditorAnnotation,
    FilmGenre,
    FilmPageInfo,
    FilmPageWrapper,
    FilmRating,
    FilmTitle,
    FilmYear,
    Image,
    FilmPageContent,
} from './FilmPage.styled.ts'
import { Container } from '../../MainPage/ui/main.styled.ts'

export const FilmPage = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const { data } = useAppSelector(getFilmByID)
    useEffect(() => {
        dispatch(fetchFilmById(id!.toString()))
    }, [dispatch, id])

    return (
        <Container>
            <FilmPageWrapper>
                <Image src={data.posterUrl} alt={'картинка'} />
                <FilmPageContent>
                    <FilmTitle>
                        {data.nameRu || data.nameEn || data.nameOriginal} (
                        {data.year})
                    </FilmTitle>
                    <FilmPageInfo>
                        <FilmRating>
                            {'Рейтинг: ' + data.ratingKinopoisk ||
                                data.ratingImdb}
                        </FilmRating>
                        <FilmYear>{'Год производства: ' + data.year}</FilmYear>
                        <FilmGenre>
                            Жанры:
                            {data.genres.map((e, i) => {
                                return <span key={i}>{e.genre}</span>
                            })}
                        </FilmGenre>
                        <FilmDescription>
                            О фильме: {data.description}
                        </FilmDescription>
                        <FilmEditorAnnotation>
                            {data.editorAnnotation}
                        </FilmEditorAnnotation>
                        <FilmCountry>
                            Страны:
                            {data.countries.map((e, i) => {
                                return <span key={i}>{e.country}</span>
                            })}
                        </FilmCountry>
                    </FilmPageInfo>
                </FilmPageContent>
            </FilmPageWrapper>
        </Container>
    )
}
