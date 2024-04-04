import styled from 'styled-components'
import { baseTheme } from '../../app/styles/theme.ts'

export const MenuContainer = styled.div`
    margin-top: 20px;
    padding-bottom: 80px;
    display: flex;
    justify-content: center;
    position: relative;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const SearchForm = styled.form`
    display: flex;
    flex-flow: column;

    width: 50vw;
    & button {
        margin: 3px;
    }

    & input {
        margin: 3px;
    }
`

export const SearchFormControls = styled.div`
    display: flex;
    justify-content: space-between;

    & input {
        width: 100%;
    }
`

export const HighlightedContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    border-radius: 10px;

    &:focus-within {
        background-color: #eaeaea;
    }

    & a:last-child {
        margin-bottom: 3px;
    }
`

export const SearchFormFilters = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 3px;
`

export const SearchFormLabel = styled.label`
    ${baseTheme.font.GeistMono};
    font-size: 16px;
`

export const FilterOption = styled.option`
    ${baseTheme.font.GeistMono};
    padding-left: 10px;
`
