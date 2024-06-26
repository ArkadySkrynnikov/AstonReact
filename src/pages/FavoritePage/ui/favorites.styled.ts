import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

export const FavoriteMoviesContainer = styled.div`
    width: 1400px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 40px;
`

export const FavoriteSpan = styled.span`
    text-align: center;
    ${baseTheme.font.GeistMono}
`
