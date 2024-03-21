import styled from 'styled-components'
import { FunctionComponent, ReactElement } from 'react'
import { baseTheme } from '../../../app/styles/theme.ts'
import { Link as RouterLink } from 'react-router-dom'

const StyledLink = styled(RouterLink)`
    ${baseTheme.font.GeistMono}
    padding: ${baseTheme.padding.link};

    text-transform: capitalize;
    text-decoration: none;

    background-color: ${baseTheme.background.link.primary};
    color: #000000;
    border-radius: ${baseTheme.borderRadius.link};
    border: 1px #e4e4e7 solid;
    cursor: pointer;

    min-width: 120px;
    display: inline-flex;
    justify-content: center;

    transition: 0.2s;
    &:hover {
        border: 1px #000000 solid;
    }
`

interface ILinkProps {
    to: string
    children: ReactElement | string
}

const Link: FunctionComponent<ILinkProps> = ({
    to,
    children,
}): ReactElement => {
    return <StyledLink to={to}>{children}</StyledLink>
}

export default Link
