import styled from 'styled-components'
import { FunctionComponent, ReactElement } from 'react'

const Loader: FunctionComponent = (): ReactElement => {
    return (
        <LoaderContainer>
            <LoaderSpan></LoaderSpan>
        </LoaderContainer>
    )
}

export { Loader }

const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoaderSpan = styled.span`
    border: 24px solid;
    border-color: rgba(51, 122, 183, 0.15) rgba(51, 122, 183, 0.25)
        rgba(51, 122, 183, 0.35) rgba(51, 122, 183, 0.5);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
    width: 500px;
    height: 500px;

    @keyframes animloader {
        0% {
            border-color: rgba(51, 122, 183, 0.15) rgba(51, 122, 183, 0.25)
                rgba(51, 122, 183, 0.35) rgba(51, 122, 183, 0.75);
        }
        33% {
            border-color: rgba(51, 122, 183, 0.75) rgba(51, 122, 183, 0.15)
                rgba(51, 122, 183, 0.25) rgba(51, 122, 183, 0.35);
        }
        66% {
            border-color: rgba(51, 122, 183, 0.35) rgba(51, 122, 183, 0.75)
                rgba(51, 122, 183, 0.15) rgba(51, 122, 183, 0.25);
        }
        100% {
            border-color: rgba(51, 122, 183, 0.25) rgba(51, 122, 183, 0.35)
                rgba(51, 122, 183, 0.75) rgba(51, 122, 183, 0.15);
        }
    }
`
