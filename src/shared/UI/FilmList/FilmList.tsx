import { FunctionComponent, ReactElement, Suspense } from 'react'
import { ApiData } from '../../types/apiData.ts'
import { FilmCard } from '../FilmCard/FilmCard.tsx'

const FilmList: FunctionComponent<Pick<ApiData, 'items'>> = ({
    items,
}): ReactElement => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            {items.map((movie) => (
                <FilmCard
                    key={movie.kinopoiskId}
                    film={movie}
                    isFavoritePage={false}
                />
            ))}
        </Suspense>
    )
}

export default FilmList
