import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { fetchFilmById } from '../../../shared/reducers/Search/slices/searchById.ts'
import { getFilmByID } from '../../../shared/reducers/Search/selectors/selectors.ts'
import { Container, Image } from './FilmPage.styled.ts'

export const FilmPage = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const { data } = useAppSelector(getFilmByID)
    useEffect(() => {
        dispatch(fetchFilmById(id!.toString()))
    }, [dispatch, id])

    return (
        <Container>
            <span>{data.nameRu || data.nameEn || data.nameOriginal}</span>
            <Image src={data.posterUrl} alt={'картинка'} />
            <span>{'Рейтинг: ' + data.ratingKinopoisk || data.ratingImdb}</span>
            <span>{'Год производства: ' + data.year}</span>
            <span>
                Жанры:
                {data.genres.map((e, i) => {
                    return <span key={i}>{e.genre}</span>
                })}
            </span>
            <span>{data.description}</span>
            <span>{data.editorAnnotation}</span>
            <span>
                Страны:
                {data.countries.map((e, i) => {
                    return <span key={i}>{e.country}</span>
                })}
            </span>
        </Container>
    )
}
