import { FunctionComponent, memo, useEffect, useState } from 'react'
import { FilmItem } from '../../types/apiData.ts'
import fallbackImage from '../../../assets/images/default-fallback.png'
import { Link } from '../Link/Link.tsx'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks.ts'
import { getUser } from '../../reducers/Auth/selectors/selectors.tsx'
import {
    addMovieToFavoriteDB,
    removeMovieFromFavorites,
} from '../../reducers/Favorite/actions/FavoriteActions.tsx'
import { RenderButtons } from '../RenderButton/RenderButtons.tsx'
import {
    Container,
    FilmContainer,
    FilmName,
    Poster,
} from './filmCard.styled.ts'

type FilmCardProps = {
    film: FilmItem
    isFavoritePage: boolean
}

export const FilmCard: FunctionComponent<FilmCardProps> = memo((props) => {
    const { film, isFavoritePage } = props
    const [toggle, setToggle] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const user = useAppSelector(getUser)

    useEffect(() => {
        const favoritesFromStorage = JSON.parse(
            localStorage.getItem(`favoriteMovies_${user.id}`) || '[]',
        )
        if (favoritesFromStorage.includes(film.kinopoiskId)) {
            setToggle(true)
        }
    }, [film.kinopoiskId, user.id])

    const handleAddToFavorites = () => {
        dispatch(addMovieToFavoriteDB(film))
        setToggle(true)
        const favoritesFromStorage = JSON.parse(
            localStorage.getItem(`favoriteMovies_${user.id}`) || '[]',
        )
        const updatedFavorites = [...favoritesFromStorage, film.kinopoiskId]
        localStorage.setItem(
            `favoriteMovies_${user.id}`,
            JSON.stringify(updatedFavorites),
        )
    }

    const handleRemoveFromFavorites = () => {
        dispatch(removeMovieFromFavorites(film?.kinopoiskId))
        setToggle(false)

        const favoritesFromStorage: number[] = JSON.parse(
            localStorage.getItem(`favoriteMovies_${user.id}`) || '[]',
        )

        const updatedFavorites: number[] = favoritesFromStorage.filter(
            (id: number) => id !== film.kinopoiskId,
        )

        localStorage.setItem(
            `favoriteMovies_${user.id}`,
            JSON.stringify(updatedFavorites),
        )
    }

    return (
        <Container>
            <FilmContainer>
                {film.posterUrl ? (
                    <Poster src={film.posterUrl} loading='lazy' />
                ) : (
                    <Poster src={fallbackImage} loading='lazy' />
                )}
                <FilmName>{film.nameRu || film.nameEn}</FilmName>
                <span>
                    {'Рейтинг: ' + (film.ratingKinopoisk || film.ratingImdb)}
                </span>
                <span>{'Год: ' + film.year}</span>
                {user.isAuth ? (
                    <RenderButtons
                        isFavoritePage={isFavoritePage}
                        film={film}
                        toggle={toggle}
                        onAddToFavorites={handleAddToFavorites}
                        onRemoveFromFavorites={handleRemoveFromFavorites}
                    />
                ) : (
                    <Link to={`/filmPage/${film.kinopoiskId}`} type={'route'}>
                        Подробнее
                    </Link>
                )}
            </FilmContainer>
        </Container>
    )
})

FilmCard.displayName = 'FilmCard'
