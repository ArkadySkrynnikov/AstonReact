import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

export const LoginWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const Title = styled.h1`
    font-size: 45px;
    ${baseTheme.font.GeistMono}
`

export const AuthorizationForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const AuthorizationField = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
`

export const Input = styled.input`
    height: 25px;
    border: 0;
    border-bottom: 1px solid #555;
    background: transparent;
    width: 280px;
    padding: 8px 0 5px 0;
    font-size: 16px;

    &:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid black;
    }
`
export const Label = styled.label`
    ${baseTheme.font.GeistMono}
    font-size: 15px;
    position: absolute;
    top: -10px;
    left: 0;
    pointer-events: none;
    transition: all 0.5s ease-in-out;

    ${Input}:focus ~ & {
        top: -14px;
        font-size: 14px;
    }
`

export const ErrorField = styled.span`
    ${baseTheme.font.GeistMono}
    font-size: 13px;
    text-align: center;
`
