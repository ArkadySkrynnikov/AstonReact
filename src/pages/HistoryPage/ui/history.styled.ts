import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

export const PositioningContainer = styled.div`
    width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const HistorySpan = styled.span`
    text-align: center;
    ${baseTheme.font.GeistMono}
`
