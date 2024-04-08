import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

export const Image = styled.img`
    width: 400px;
`

export const FilmPageWrapper = styled.div`
    width: 1400px;
    display: flex;
    justify-content: center;
    gap: 70px;
`

export const FilmPageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`
export const FilmPageInfo = styled.div`
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 10px 15px;
`

export const FilmTitle = styled.h2`
    margin: 0;
    font-size: 42px;
    ${baseTheme.font.GeistMono}
`

export const FilmRating = styled.p`
    font-size: 20px;
    ${baseTheme.font.GeistMono}
`

export const FilmYear = styled.p`
    font-size: 20px;
    ${baseTheme.font.GeistMono}
`

export const FilmGenre = styled.p`
    font-size: 20px;
    ${baseTheme.font.GeistMono}
`

export const FilmDescription = styled.p`
    font-size: 22px;
    ${baseTheme.font.GeistMono}
`

export const FilmEditorAnnotation = styled.p`
    font-size: 20px;
    ${baseTheme.font.GeistMono}
`
export const FilmCountry = styled.p`
    font-size: 20px;
    ${baseTheme.font.GeistMono}
`
