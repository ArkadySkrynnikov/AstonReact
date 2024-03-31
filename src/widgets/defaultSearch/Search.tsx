import {
    ChangeEventHandler,
    FormEventHandler,
    FunctionComponent,
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
import { fetchFilmsSuggestions } from '../../shared/reducers/Search/slices/suggestionsMenuSlice.ts'

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

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        const queryString = new URLSearchParams(filters).toString()
        navigate(`/search?${queryString}`)
    }

    // Саджесты
    useEffect(() => {
        if (debouncedTerm) {
            const queryString = new URLSearchParams(filters).toString()
            dispatch(fetchFilmsSuggestions('?' + queryString))
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
        <>
            <MenuContainer>
                <HighlightedContainer>
                    <SearchForm
                        tabIndex={0}
                        autoComplete={'off'}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') e.preventDefault()
                        }}
                        onSubmit={submitHandler}
                    >
                        <div>
                            <label>
                                Сортировать:
                                <select
                                    name='selectSort'
                                    value={filters.order}
                                    onChange={selectedSortChangeHandler}
                                >
                                    <option value='RATING'>По рейтингу</option>
                                    <option value='YEAR'>По году</option>
                                </select>
                            </label>
                            <label>
                                Тип:
                                <select
                                    name='selectType'
                                    value={filters.type}
                                    onChange={selectedTypeChangeHandler}
                                >
                                    <option value='FILM'>Фильм</option>
                                    <option value='TV_SHOW'>
                                        Телевизионное шоу
                                    </option>
                                    <option value='MINI_SERIES'>
                                        Мини сериал
                                    </option>
                                    <option value='ALL'>Все вместе</option>
                                </select>
                            </label>
                            <label>
                                Минимальный рейтинг:
                                <select
                                    name='selectMinRating'
                                    value={filters.ratingFrom}
                                    onChange={selectedMinRatingChangeHandler}
                                >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                </select>
                            </label>
                        </div>
                        <SearchFormControls>
                            <Input
                                onChange={onChangeHandler}
                                placeholder={'Найти фильм'}
                                value={filters.keyword}
                                name={'search'}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') e.preventDefault()
                                }}
                            />
                            <Button variant={'primary'} type={'submit'}>
                                Найти
                            </Button>
                        </SearchFormControls>
                    </SearchForm>
                    {debouncedTerm && <SuggestMenu items={data.items} />}
                </HighlightedContainer>
            </MenuContainer>
        </>
    )
}
