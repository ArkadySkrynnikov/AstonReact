import {
    ChangeEventHandler,
    FormEventHandler,
    FunctionComponent,
    KeyboardEventHandler,
    ReactElement,
    useEffect,
    useState,
} from 'react'
import {
    useAppDispatch,
    useAppSelector,
} from '../../shared/hooks/redux-hooks.ts'
import { Input } from '../../shared/UI/Input/Input.tsx'
import { Button } from '../../shared/UI/button/Button.tsx'
import {
    HighlightedContainer,
    MenuContainer,
    SearchForm,
    SearchFormControls,
} from './Search.styled.ts'
import { SuggestMenu } from '../../shared/UI/SuggestMenu/SuggestMenu.tsx'
import useDebouncedValue from '../../shared/hooks/useDebouncedValue.tsx'
import { getSuggestions } from '../../shared/reducers/Search/selectors/selectors.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { apiQueryFilters } from '../../shared/consts/apiQueryStrings.ts'
import { fetchFilmsSuggestions } from '../../shared/reducers/Search/slices/search.ts'
import { SEARCH } from '../../app/providers/router/routePaths/pathConstants.ts'
import { Select } from '../../shared/UI/Select/Select.tsx'
import {
    orderTypes,
    ratingValues,
    videoTypes,
} from '../../shared/consts/filterValues.ts'

export const Search: FunctionComponent = (): ReactElement => {
    const { data } = useAppSelector(getSuggestions)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [filters, setFilters] = useState(apiQueryFilters)

    //ввод пользователя
    const [term, setTerm] = useState<string>('')
    const debouncedTerm = useDebouncedValue(term, 800)

    //обновление состояния строки инпута и параметров поиска
    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTerm(event.target.value)
        setFilters((prevState) => {
            return { ...prevState, keyword: event.target.value }
        })
    }

    //обновление состояния селектов и параметров поиска
    const selectedSortChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
        event,
    ) => {
        setFilters((prevState) => {
            return { ...prevState, order: event.target.value }
        })
    }
    const selectedTypeChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
        event,
    ) => {
        setFilters((prevState) => {
            return { ...prevState, type: event.target.value }
        })
    }
    const selectedMinRatingChangeHandler: ChangeEventHandler<
        HTMLSelectElement
    > = (event) => {
        setFilters((prevState) => {
            return { ...prevState, ratingFrom: event.target.value }
        })
    }

    const formOnKeyDownHandler: KeyboardEventHandler<HTMLFormElement> = (
        event,
    ) => {
        if (event.key === 'Enter') event.preventDefault()
    }

    const inputKeyDownHandler: KeyboardEventHandler<HTMLInputElement> = (
        event,
    ) => {
        if (event.key === 'Enter') event.preventDefault()
    }

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        const queryString = new URLSearchParams(filters).toString()

        if (location.pathname === '/') {
            navigate(`${SEARCH}?${queryString}`)
        } else {
            navigate({ search: queryString })
        }
    }

    // Саджесты
    useEffect(() => {
        if (debouncedTerm) {
            const queryString = new URLSearchParams(filters).toString()
            dispatch(fetchFilmsSuggestions(queryString))
        }
    }, [dispatch, debouncedTerm, filters])

    //Начальное состояние информации в поиске если не пустой url
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search)
        if (location.search) {
            setFilters((prevState) => {
                return { ...prevState, ...Object.fromEntries(urlParams) }
            })
        }
    }, [location.search])

    return (
        <MenuContainer>
            <HighlightedContainer>
                <SearchForm
                    tabIndex={0}
                    autoComplete={'off'}
                    onKeyDown={formOnKeyDownHandler}
                    onSubmit={submitHandler}
                >
                    <div>
                        <label>
                            Сортировать:
                            <Select
                                name='selectSort'
                                value={filters.order}
                                onChange={selectedSortChangeHandler}
                            >
                                {orderTypes.map((e, i) => {
                                    return (
                                        <option key={i} value={e.type}>
                                            {e.title}
                                        </option>
                                    )
                                })}
                            </Select>
                        </label>
                        <label>
                            Тип:
                            <Select
                                name='selectType'
                                value={filters.type}
                                onChange={selectedTypeChangeHandler}
                            >
                                {videoTypes.map((e, i) => {
                                    return (
                                        <option key={i} value={e.type}>
                                            {e.title}
                                        </option>
                                    )
                                })}
                            </Select>
                        </label>
                        <label>
                            Минимальный рейтинг:
                            <Select
                                name='selectMinRating'
                                value={filters.ratingFrom}
                                onChange={selectedMinRatingChangeHandler}
                            >
                                {ratingValues.map((e, i) => {
                                    return (
                                        <option key={i} value={e}>
                                            {e}
                                        </option>
                                    )
                                })}
                            </Select>
                        </label>
                    </div>
                    <SearchFormControls>
                        <Input
                            onChange={onChangeHandler}
                            placeholder={'Найти фильм'}
                            value={filters.keyword}
                            name={'search'}
                            onKeyDown={inputKeyDownHandler}
                        />
                        <Button variant={'primary'} type={'submit'}>
                            Найти
                        </Button>
                    </SearchFormControls>
                </SearchForm>
                {debouncedTerm && <SuggestMenu items={data.items} />}
            </HighlightedContainer>
        </MenuContainer>
    )
}
