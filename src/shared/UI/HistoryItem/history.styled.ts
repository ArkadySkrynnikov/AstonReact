import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

export const Container = styled.div`
    border-radius: 8px;
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.08);
    height: 60px;
    display: flex;
    align-items: center;
    background: rgb(34, 193, 195);
    background: linear-gradient(
        0deg,
        rgba(34, 193, 195, 0.1) 0%,
        rgba(69, 171, 224, 0.1) 100%
    );
    justify-content: space-around;
`

export const Span = styled.span`
    ${baseTheme.font.GeistMono};
    width: 300px;
`

export const RatingSpan = styled(Span)`
    width: 150px;
`
