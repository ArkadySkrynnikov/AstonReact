import { FunctionComponent, ReactElement, Suspense } from 'react'
import { ApiData } from '../../types/apiData.ts'
import { FilmCard } from '../FilmCard/FilmCard.tsx'
import { Loader } from '../Loader/Loader.tsx'

const FilmList: FunctionComponent<Pick<ApiData, 'items'>> = ({
    items,
}): ReactElement => {
    return (
        <Suspense fallback={<Loader />}>
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
