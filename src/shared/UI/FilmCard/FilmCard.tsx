import {
    FunctionComponent,
    memo,
    useCallback,
    useEffect,
    useState,
} from 'react'
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
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'
import {
    getFavoritesFromStorage,
    updateFavoritesInStorage,
} from '../../../features/utils/storageUtils.ts'

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
        const favoritesFromStorage = getFavoritesFromStorage(user.id as string)
        if (favoritesFromStorage.includes(film.kinopoiskId)) {
            setToggle(true)
        }
    }, [film.kinopoiskId, user.id])

    const handleAddToFavorites = useCallback(() => {
        dispatch(addMovieToFavoriteDB(film))
        setToggle(true)
        updateFavoritesInStorage(user.id as string, film.kinopoiskId, true)
    }, [dispatch, film, user.id])

    const handleRemoveFromFavorites = useCallback(() => {
        dispatch(removeMovieFromFavorites(film?.kinopoiskId))
        setToggle(false)
        updateFavoritesInStorage(user.id as string, film.kinopoiskId, false)
    }, [dispatch, film, user.id])

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
                    <Link
                        to={`${ROUTE_PATHS.GOTO_FILM_PAGE}${film.kinopoiskId}`}
                        type={'route'}
                    >
                        Подробнее
                    </Link>
                )}
            </FilmContainer>
        </Container>
    )
})

FilmCard.displayName = 'FilmCard'
