import { FavoriteMoviesContainer, FavoriteSpan } from './favorites.styled.ts'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { getFavorites } from '../../../shared/reducers/Favorite/selectors/FavoriteSelectors.tsx'

import { FilmCard } from '../../../shared/UI/FilmCard/FilmCard.tsx'
import { FilmItem } from '../../../shared/types/apiData.ts'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../../shared/reducers/Auth/selectors/selectors.tsx'
import { useEffect } from 'react'
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'
import { getFavoriteFromFirebaseDB } from '../../../shared/reducers/Favorite/actions/FavoriteActions.tsx'
import { Container } from '../../MainPage/ui/main.styled.ts'

export const FavoritePage = () => {
    const favoriteMovies = useAppSelector(getFavorites)
    const user = useAppSelector(getUser)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated')
        if (!user?.isAuth) {
            if (!isAuthenticated) {
                navigate(ROUTE_PATHS.ROOT)
            }
        }
        dispatch(getFavoriteFromFirebaseDB())
    }, [dispatch, user, navigate])

    return (
        <>
            <Container>
                <FavoriteMoviesContainer>
                    {favoriteMovies?.length ? (
                        favoriteMovies.map((movie: FilmItem) => (
                            <FilmCard
                                key={movie.kinopoiskId}
                                film={movie}
                                isFavoritePage={true}
                            />
                        ))
                    ) : (
                        <FavoriteSpan>Ваши избранные пусты</FavoriteSpan>
                    )}
                </FavoriteMoviesContainer>
            </Container>
        </>
    )
}
