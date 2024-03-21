import styled from 'styled-components'

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
    color: black;
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
`

export const Input = styled.input`
    height: 25px;
    border: 0;
    border-bottom: 1px solid #555;
    background: transparent;
    width: 280px;
    padding: 8px 0 5px 0;
    font-size: 16px;
    color: black;

    &:focus {
        border: none;
        outline: none;
        border-bottom: 1px solid black;
    }
`
export const Label = styled.label`
    font-size: 15px;
    position: absolute;
    top: -10px;
    left: 0;
    color: black;
    pointer-events: none;
    transition: all 0.5s ease-in-out;

    ${Input}:focus ~ & {
        top: -14px;
        font-size: 14px;
        color: black;
    }
`

export const Button = styled.button`
    width: 300px;
    height: 52px;
    background-color: black;
    color: white;
    padding: 15px 15px;
    border: none;
    font-size: 17px;
    cursor: pointer;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
    position: relative;
    overflow: hidden;

    &:after {
        border-radius: 3rem;
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-100%, 0) rotate(10deg);
        transform-origin: top left;
        transition: 0.4s transform ease-out;
        will-change: transform;
        z-index: -1;
    }

    &:hover {
        border: 1px solid aqua;
        color: grey;
        transform: scale(1.05);
        will-change: transform;
    }
`
