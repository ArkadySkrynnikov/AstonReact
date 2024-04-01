import { FunctionComponent, ReactElement } from 'react'
import { ApiData } from '../../types/apiData.ts'
import { SuggestMenuItem } from '../SuggestMenuItem/SuggestMenuItem.tsx'

export const SuggestMenu: FunctionComponent<Pick<ApiData, 'items'>> = ({
    items,
}): ReactElement => {
    return items ? (
        <>
            {items.slice(0, 5).map((e) => (
                <SuggestMenuItem key={e.kinopoiskId} {...e} />
            ))}
        </>
    ) : (
        <div>Loading</div>
    )
}
