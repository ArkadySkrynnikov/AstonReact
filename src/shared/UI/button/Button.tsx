import { FunctionComponent, MouseEventHandler, ReactElement } from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

const StyledButton = styled.button<{
    $primary: 'primary' | 'secondary'
}>`
    ${baseTheme.font.GeistMono}
    padding: ${baseTheme.padding.button};

    text-transform: capitalize;
    color: ${(props) =>
        props.$primary === 'primary'
            ? baseTheme.color.button.primary
            : baseTheme.color.button.secondary};

    background-color: ${(props) =>
        props.$primary === 'primary'
            ? baseTheme.background.button.primary
            : baseTheme.background.button.secondary};

    border-radius: ${baseTheme.borderRadius.button};
    border: 1px #f4f4f5 solid;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
        background-color: ${baseTheme.background.button.hover};

        color: ${baseTheme.color.button.hover};

        border: 1px #f4f4f5 solid;
    }

    &:disabled {
        cursor: not-allowed;
    }
`

interface IButtonProps {
    type?: 'button' | 'submit' | 'reset'
    children: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
    variant: 'primary' | 'secondary'
}

const Button: FunctionComponent<IButtonProps> = ({
    type,
    children,
    onClick,
    disabled,
    variant,
}): ReactElement => {
    return (
        <StyledButton
            $primary={variant}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export default Button
