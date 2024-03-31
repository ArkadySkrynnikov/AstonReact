import { FunctionComponent, ReactElement } from 'react'
import { ApiData, filmItem } from '../../types/apiData.ts'
import styled from 'styled-components'
import { Link } from '../Link/Link.tsx'

export const SuggestMenu: FunctionComponent<Pick<ApiData, 'items'>> = ({
    items,
}): ReactElement => {
    return items ? (
        <>
            {items.slice(0, 5).map((e) => (
                <MenuItem key={e.kinopoiskId} {...e} />
            ))}
        </>
    ) : (
        <div>Loading</div>
    )
}

const MenuItem: FunctionComponent<filmItem> = (film): ReactElement => {
    return (
        <Link to={`filmPage/${film.kinopoiskId}`} type={'suggestItem'}>
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
const Container = styled.div`
    display: flex;
    width: 100%;
`

const RatingSpan = styled.span`
    width: 35px;
    color: #44b643;
`

const NameSpan = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const YearSpan = styled.span`
    margin-left: auto;
`
