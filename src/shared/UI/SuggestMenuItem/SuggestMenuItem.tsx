import { FunctionComponent, ReactElement } from 'react'
import { FilmItem } from '../../types/apiData.ts'
import { Link } from '../Link/Link.tsx'
import {
    Container,
    NameSpan,
    RatingSpan,
    YearSpan,
} from './SuggestMenuItem.styled.ts'
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'

const SuggestMenuItem: FunctionComponent<FilmItem> = (film): ReactElement => {
    return (
        <Link
            to={`${ROUTE_PATHS.GOTO_FILM_PAGE}${film.kinopoiskId}`}
            type={'suggestItem'}
        >
            <Container>
                <RatingSpan>
                    {film.ratingKinopoisk || film.ratingImdb}
                </RatingSpan>

                <NameSpan>
                    {film.nameRu || film.nameEn || film.nameOriginal}
                </NameSpan>

                <YearSpan>{film.year}</YearSpan>
            </Container>
        </Link>
    )
}

export { SuggestMenuItem }
