import { FunctionComponent, MouseEventHandler } from 'react'
import { ApiQueryFiltersType } from '../../types/apiData.ts'
import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'
import { Link } from '../Link/Link.tsx'
import { SEARCH } from '../../../app/providers/router/routePaths/pathConstants.ts'
import { Button } from '../button/Button.tsx'
import { useAppDispatch } from '../../hooks/redux-hooks.ts'
import { deleteItemFromSearchHistory } from '../../reducers/History/slices/searchHistorySlice.ts'

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
            <Link to={`/${SEARCH}?${query}`} type={'route'}>
                Перейти
            </Link>
            <Button variant={'secondary'} onClick={buttonOnClickHandler}>
                Удалить
            </Button>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 8px;
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.08);
    height: 60px;
    display: flex;
    align-items: center;
    background: rgb(34, 193, 195);
    background: linear-gradient(
        0deg,
        rgba(34, 193, 195, 0.1) 0%,
        rgba(69, 171, 224, 0.1) 100%
    );
    justify-content: space-around;
`

const Span = styled.span`
    ${baseTheme.font.GeistMono};
    width: 300px;
`

const RatingSpan = styled(Span)`
    width: 150px;
`
