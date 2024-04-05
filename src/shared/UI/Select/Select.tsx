import { ChangeEventHandler, FunctionComponent, ReactElement } from 'react'
import { StyledSelect } from './select.styled.ts'

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

export { Select }
