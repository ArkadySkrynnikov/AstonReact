import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

export const FilmCardContainer = styled.div`
    ${baseTheme.font.GeistMono}
    width: 300px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
`

export const FilmContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 8px;
    gap: 15px;
`
export const FilmCardInfo = styled.div`
    display: flex;
    gap: 30px;
`
export const AboutFilm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const Poster = styled.img`
    max-height: 150px;
    border-radius: 8px;
`

export const FilmName = styled.span`
    width: 284px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 22px;
`

export const FilmCardButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`
