import { FunctionComponent, memo } from 'react'
import { Button } from '../button/Button.tsx'
import { Link } from '../Link/Link.tsx'
import { FilmItem } from '../../types/apiData.ts'

type ButtonProps = {
    isFavoritePage: boolean
    film: FilmItem
    toggle: boolean
    onAddToFavorites: () => void
    onRemoveFromFavorites: () => void
}

export const RenderButtons: FunctionComponent<ButtonProps> = memo(
    ({
        isFavoritePage,
        film,
        toggle,
        onAddToFavorites,
        onRemoveFromFavorites,
    }) => {
        if (isFavoritePage) {
            return (
                <>
                    <Link to={`/filmPage/${film.kinopoiskId}`} type={'route'}>
                        Подробнее
                    </Link>
                    <Button variant='secondary' onClick={onRemoveFromFavorites}>
                        Удалить
                    </Button>
                </>
            )
        } else {
            return (
                <>
                    <Link to={`/filmPage/${film.kinopoiskId}`} type={'route'}>
                        Подробнее
                    </Link>
                    <Button
                        variant='secondary'
                        onClick={onAddToFavorites}
                        disabled={toggle}
                    >
                        Добавить в избранное
                    </Button>
                </>
            )
        }
    },
)

RenderButtons.displayName = 'RenderButtons'
