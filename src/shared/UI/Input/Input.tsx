import {
    ChangeEventHandler,
    FocusEventHandler,
    FormEventHandler,
    FunctionComponent,
    HTMLInputTypeAttribute,
    KeyboardEventHandler,
    LegacyRef,
    MouseEventHandler,
    ReactElement,
} from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

const StyledInput = styled.input`
    background-color: ${baseTheme.background.input.primary};
    padding: ${baseTheme.padding.input};
    border-radius: ${baseTheme.borderRadius.input};
    ${baseTheme.font.GeistMono};
    border: 1px #000000 solid;
    color: #ffffff;
    outline: none;

    &::placeholder {
        color: #a1a1aa;
    }
`

type InputProps = {
    type?: HTMLInputTypeAttribute
    onSubmit?: FormEventHandler<HTMLInputElement>
    onChange?: ChangeEventHandler<HTMLInputElement>
    onClick?: MouseEventHandler<HTMLInputElement>
    ref?: LegacyRef<HTMLInputElement>
    value?: string | number | readonly string[] | undefined
    defaultValue?: string | number | readonly string[] | undefined
    placeholder?: string
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
    onFocus?: FocusEventHandler<HTMLInputElement>
    name?: string
}

export const Input: FunctionComponent<InputProps> = ({
    type,
    onSubmit,
    onChange,
    ref,
    value,
    defaultValue,
    onClick,
    placeholder,
    onKeyDown,
    onBlur,
    onFocus,
    name,
}): ReactElement => {
    return (
        <StyledInput
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            ref={ref}
            type={type}
            onSubmit={onSubmit}
            onChange={onChange}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
            name={name}
        />
    )
}
