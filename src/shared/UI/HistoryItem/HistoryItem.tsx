import { FunctionComponent, MouseEventHandler } from 'react'
import { ApiQueryFiltersType } from '../../types/apiData.ts'
import { Link } from '../Link/Link.tsx'
import * as ROUTE_PATHS from '../../../app/providers/router/routePaths/pathConstants.ts'
import { Button } from '../button/Button.tsx'
import { useAppDispatch } from '../../hooks/redux-hooks.ts'
import { deleteItemFromSearchHistory } from '../../reducers/History/slices/searchHistorySlice.ts'
import { Container, RatingSpan, Span } from './history.styled.ts'

type HistoryItemProps = {
    filters: ApiQueryFiltersType
    id: number
    username: string
}

export const HistoryItem: FunctionComponent<HistoryItemProps> = ({
    filters,
    id,
    username,
}) => {
    const query = new URLSearchParams(filters)
    const dispatch = useAppDispatch()

    const buttonOnClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(deleteItemFromSearchHistory({ user: username, index: id }))
    }

    return (
        <Container>
            <Span>{'Ключевое слово: ' + filters.keyword}</Span>
            <Span>{'Видео формат: ' + filters.type}</Span>
            <RatingSpan>{'Рейтинг: ' + filters.ratingFrom}</RatingSpan>
            <Span>{'Минимальный год: ' + filters.yearFrom}</Span>
            <Link to={`/${ROUTE_PATHS.SEARCH}?${query}`} type={'route'}>
                Перейти
            </Link>
            <Button variant={'secondary'} onClick={buttonOnClickHandler}>
                Удалить
            </Button>
        </Container>
    )
}
