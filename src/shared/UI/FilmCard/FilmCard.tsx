import { FunctionComponent } from 'react'
import { FilmItem } from '../../types/apiData.ts'
import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'
import fallbackImage from '../../../assets/images/default-fallback.png'
import { Link } from '../Link/Link.tsx'
import { Button } from '../button/Button.tsx'

const Container = styled.div`
    ${baseTheme.font.GeistMono}
    width: 300px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
`

const FilmContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 8px;
    gap: 5px;
`

const Poster = styled.img`
    max-height: 150px;
    border-radius: 8px;
`

const FilmName = styled.span`
    width: 284px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const FilmCard: FunctionComponent<FilmItem> = (film) => {
    return (
        <Container>
            <FilmContainer>
                {film.posterUrl ? (
                    <Poster src={film.posterUrl} />
                ) : (
                    <Poster src={fallbackImage} />
                )}
                <FilmName>{film.nameRu ? film.nameRu : film.nameEn}</FilmName>
                <span>
                    {'Рейтинг: ' + film.ratingKinopoisk || film.ratingImdb}
                </span>
                <span>{'Год: ' + film.year}</span>
                <Link to={`/filmPage/${film.kinopoiskId}`} type={'route'}>
                    Подробнее
                </Link>
                <Button variant={'secondary'}>Добавить в избранное</Button>
            </FilmContainer>
        </Container>
    )
}
