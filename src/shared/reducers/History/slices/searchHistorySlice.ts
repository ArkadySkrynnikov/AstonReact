import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiQueryFiltersType } from '../../../types/apiData.ts'

type searchHistorySliceInitialState = {
    currentItemsInLs: ApiQueryFiltersType[]
    newItem: ApiQueryFiltersType
}

const initialState: searchHistorySliceInitialState = {
    currentItemsInLs: [],
    newItem: {
        order: '',
        type: '',
        ratingFrom: '',
        ratingTo: '',
        yearFrom: '',
        yearTo: '',
        keyword: '',
        page: '',
    },
}

const searchHistorySlice = createSlice({
    name: 'searchHistorySlice',
    initialState,
    reducers: {
        saveSearchHistory(
            state,
            action: PayloadAction<{ data: ApiQueryFiltersType; user: string }>,
        ) {
            //получаем массив поисковых запросов
            const itemsInLS = JSON.parse(
                localStorage.getItem(action.payload.user)!,
            )

            // в случае если они существуют обновляем стейт
            if (itemsInLS) {
                // в случае если их 50 убираем последний
                if (itemsInLS.length === 50) {
                    itemsInLS.pop()
                }

                state.currentItemsInLs = itemsInLS
            }

            // новый поисковой запрос
            state.newItem = action.payload.data

            //добавляем его в начало стейта
            state.currentItemsInLs.unshift(state.newItem)

            //добавляем запросы в LS
            localStorage.setItem(
                action.payload.user,
                JSON.stringify(state.currentItemsInLs),
            )

            //отчищаем новый запрос
            state.newItem = initialState.newItem
        },

        updateSearchHistory(state, action: PayloadAction<{ user: string }>) {
            //обновление данных внутри компонентов использующих этот стейт для рендера
            state.currentItemsInLs = JSON.parse(
                localStorage.getItem(action.payload.user)!,
            )
        },

        deleteItemFromSearchHistory(
            state,
            action: PayloadAction<{ user: string; index: number }>,
        ) {
            //убрираем поисковой запрос из стейта
            state.currentItemsInLs.splice(action.payload.index, 1)

            //обновляем LS
            localStorage.setItem(
                action.payload.user,
                JSON.stringify(state.currentItemsInLs),
            )
        },
    },
})

export default searchHistorySlice.reducer
export const {
    saveSearchHistory,
    updateSearchHistory,
    deleteItemFromSearchHistory,
} = searchHistorySlice.actions
