import { ChangeEventHandler, FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'

type SelectProps = {
    name: string
    onChange: ChangeEventHandler<HTMLSelectElement>
    value: string
    children: ReactElement | ReactElement[] | string
}

const Select: FunctionComponent<SelectProps> = ({
    name,
    value,
    onChange,
    children,
}): ReactElement => {
    return (
        <StyledSelect name={name} value={value} onChange={onChange}>
            {children}
        </StyledSelect>
    )
}

const StyledSelect = styled.select`
    margin: 3px 5px 0 3px;
`

export { Select }
