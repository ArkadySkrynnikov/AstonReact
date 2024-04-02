import styled from 'styled-components'
import { FunctionComponent, ReactElement } from 'react'
import { baseTheme } from '../../../app/styles/theme.ts'
import { Link as RouterLink } from 'react-router-dom'

const StyledLink = styled(RouterLink)<{
    $type: 'logo' | 'route' | 'suggestItem'
}>`
    ${baseTheme.font.GeistMono}

    text-transform: ${(props) => {
        switch (props.$type) {
            case 'suggestItem':
                return 'none'
            default:
                return 'capitalize'
        }
    }};
    text-decoration: none;

    padding: ${(props) => {
        switch (props.$type) {
            case 'suggestItem':
                return '4px 8px'
            default:
                return baseTheme.padding.link
        }
    }};

    background-color: ${baseTheme.background.link.primary};
    color: #000000;
    border-radius: ${baseTheme.borderRadius.link};
    min-width: 120px;
    display: ${(props) => {
        switch (props.$type) {
            case 'suggestItem':
                return 'block'
            default:
                return 'inline-flex'
        }
    }};

    border: ${(props) => {
        switch (props.$type) {
            case 'logo':
                return baseTheme.border.link.logo
            case 'route':
                return baseTheme.border.link.route
            case 'suggestItem':
                return baseTheme.border.link.suggestItem
        }
    }};

    justify-content: ${(props) => {
        switch (props.$type) {
            case 'suggestItem':
                return 'normal'
            default:
                return 'center'
        }
    }};

    margin-right: ${(props) => {
        switch (props.$type) {
            case 'suggestItem':
                return '3px'
            default:
                return 0
        }
    }};

    margin-top: ${(props) => {
        switch (props.$type) {
            case 'suggestItem':
                return '3px'
            default:
                return 0
        }
    }};

    margin-left: ${(props) => {
        switch (props.$type) {
            case 'suggestItem':
                return '3px'
            default:
                return 0
        }
    }};

    align-items: center;

    transition: 0.2s;
    &:hover {
        border: ${(props) =>
            props.$type === 'logo'
                ? baseTheme.border.link.hover.logo
                : baseTheme.border.link.hover.route};
    }
`

type LinkProps = {
    to: string
    children: ReactElement | string | ReactElement[]
    type: 'logo' | 'route' | 'suggestItem'
}

export const Link: FunctionComponent<LinkProps> = ({
    to,
    children,
    type,
}): ReactElement => {
    return (
        <StyledLink $type={type} to={to}>
            {children}
        </StyledLink>
    )
}
