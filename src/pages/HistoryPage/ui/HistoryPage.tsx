import {
    useAppDispatch,
    useAppSelector,
} from '../../../shared/hooks/redux-hooks.ts'
import { getUser } from '../../../shared/reducers/Auth/selectors/selectors.tsx'
import { FunctionComponent, ReactElement, useEffect } from 'react'
import { getSearchHistory } from '../../../shared/reducers/History/selectors/selectors.ts'
import { updateSearchHistory } from '../../../shared/reducers/History/slices/searchHistorySlice.ts'
import styled from 'styled-components'
import { HistoryItem } from '../../../shared/UI/HistoryItem/HistoryItem.tsx'

export const HistoryPage: FunctionComponent = (): ReactElement => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(getUser)
    const searchHistoryItems = useAppSelector(getSearchHistory)

    useEffect(() => {
        //два ререндера и только потом юзер обновляется
        if (user.username) {
            dispatch(updateSearchHistory({ user: user.username }))
        }
    }, [dispatch, user])

    return (
        <Container>
            <PositioningContainer>
                {searchHistoryItems.map((e, i) => {
                    return (
                        <HistoryItem
                            username={user.username!}
                            id={i}
                            filters={e}
                            key={i}
                        />
                    )
                })}
            </PositioningContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`

const PositioningContainer = styled.div`
    width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
