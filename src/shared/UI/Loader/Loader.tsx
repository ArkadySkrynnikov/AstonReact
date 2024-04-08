import { FunctionComponent, ReactElement } from 'react'
import { LoaderContainer, LoaderSpan } from './loader.styled.ts'

const Loader: FunctionComponent = (): ReactElement => {
    return (
        <LoaderContainer>
            <LoaderSpan></LoaderSpan>
        </LoaderContainer>
    )
}

export { Loader }
