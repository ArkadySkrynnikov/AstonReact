import {
    FunctionComponent,
    memo,
    useCallback,
    useContext,
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
    FilmCardContainer,
    FilmContainer,
    FilmName,
    Poster,
    FilmCardButton,
    FilmCardInfo,
    AboutFilm,
} from './filmCard.styled.ts'
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'
import {
    getFavoritesFromStorage,
    updateFavoritesInStorage,
} from '../../../features/utils/storageUtils.ts'
import { FeatureContext } from '../../../app/context/FeatureFlag.tsx'
import { GOTO_FILM_PAGE } from '../../../app/providers/router/routePaths/pathConstants.ts'

type FilmCardProps = {
    film: FilmItem
    isFavoritePage: boolean
}

export const FilmCard: FunctionComponent<FilmCardProps> = memo((props) => {
    const { film, isFavoritePage } = props
    const [toggle, setToggle] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const user = useAppSelector(getUser)
    const { isTelegramShareEnabled } = useContext(FeatureContext)

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

    const urlToShare = `https://t.me/share/url?url=http://localhost:5173${GOTO_FILM_PAGE}${film.kinopoiskId}&text=${film.nameRu}`

    return (
        <FilmCardContainer>
            <FilmContainer>
                <FilmCardInfo>
                    {film.posterUrl ? (
                        <Poster src={film.posterUrl} loading='lazy' />
                    ) : (
                        <Poster src={fallbackImage} loading='lazy' />
                    )}
                    <AboutFilm>
                        <span>
                            {'Рейтинг: ' +
                                (film.ratingKinopoisk || film.ratingImdb)}
                        </span>
                        <span>{'Год: ' + film.year}</span>
                    </AboutFilm>
                </FilmCardInfo>
                <FilmName>
                    {film.nameRu || film.nameEn || film.nameOriginal}
                </FilmName>
                <FilmCardButton>
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
                    {isTelegramShareEnabled && (
                    <Link type={'route'} to={urlToShare} target={'_blank'}>
                        Поделиться
                    </Link>
                    )}
                </FilmCardButton>
            </FilmContainer>
        </FilmCardContainer>
    )
})

FilmCard.displayName = 'FilmCard'
