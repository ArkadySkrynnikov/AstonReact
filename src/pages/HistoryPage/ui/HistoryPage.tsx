import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { getUser } from '../../../shared/reducers/Auth/selectors/selectors.tsx'
import { FunctionComponent, ReactElement, useEffect } from 'react'
import { getSearchHistory } from '../../../shared/reducers/History/selectors/selectors.ts'
import { updateSearchHistory } from '../../../shared/reducers/History/slices/searchHistorySlice.ts'
import { HistoryItem } from '../../../shared/UI/HistoryItem/HistoryItem.tsx'
import { HistorySpan, PositioningContainer } from './history.styled.ts'
import { Container } from '../../MainPage/ui/main.styled.ts'

export const HistoryPage: FunctionComponent = (): ReactElement => {
    const user = useAppSelector(getUser)
    const itemsInLS = JSON.parse(localStorage.getItem(user.username!)!)
    const dispatch = useAppDispatch()
    const searchHistoryItems = useAppSelector(getSearchHistory)

    useEffect(() => {
        if (itemsInLS === null) {
            localStorage.setItem(user.username!, '[]')
        }
    }, [itemsInLS, user.username])

    useEffect(() => {
        //два ререндера и только потом юзер обновляется
        if (user.username) {
            dispatch(updateSearchHistory({ user: user.username }))
        }
    }, [dispatch, user])

    return (
        <>
            <Container>
                <PositioningContainer>
                    {searchHistoryItems.length > 0 ? (
                        searchHistoryItems.map((e, i) => {
                            return (
                                <HistoryItem
                                    username={user.username!}
                                    id={i}
                                    filters={e}
                                    key={i}
                                />
                            )
                        })
                    ) : (
                        <HistorySpan>Ваша история пуста</HistorySpan>
                    )}
                </PositioningContainer>
            </Container>
        </>
    )
}
