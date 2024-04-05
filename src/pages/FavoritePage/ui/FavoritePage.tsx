import { FavoriteMoviesContainer } from './favorites.styled.ts'
import { useAppSelector } from '../../../shared/hooks/redux-hooks.ts'
import { getFavorites } from '../../../shared/reducers/Favorite/selectors/FavoriteSelectors.tsx'

import { FilmCard } from '../../../shared/UI/FilmCard/FilmCard.tsx'
import { FilmItem } from '../../../shared/types/apiData.ts'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../../shared/reducers/Auth/selectors/selectors.tsx'
import { useEffect } from 'react'
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'

export const FavoritePage = () => {
    const favoriteMovies = useAppSelector(getFavorites)
    const user = useAppSelector(getUser)
    const navigate = useNavigate()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated')
        if (!user?.isAuth) {
            if (!isAuthenticated) {
                navigate(ROUTE_PATHS.ROOT)
            }
        }
    }, [user, navigate])

    return (
        <>
            <h1>Избранное</h1>
            {favoriteMovies?.length ? (
                <FavoriteMoviesContainer>
                    {favoriteMovies.map((movie: FilmItem) => (
                        <FilmCard
                            key={movie.kinopoiskId}
                            film={movie}
                            isFavoritePage={true}
                        />
                    ))}
                </FavoriteMoviesContainer>
            ) : (
                <h2>Список пуст</h2>
            )}
        </>
    )
}
