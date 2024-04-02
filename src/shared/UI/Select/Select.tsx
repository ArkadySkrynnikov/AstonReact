import { ChangeEventHandler, FunctionComponent, ReactElement } from 'react'

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
        <select name={name} value={value} onChange={onChange}>
            {children}
        </select>
    )
}

export { Select }
