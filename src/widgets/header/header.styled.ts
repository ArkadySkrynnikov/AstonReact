import styled from 'styled-components'
import { baseTheme } from '../../app/styles/theme.ts'
import sun from '../../assets/icons/sun.svg'

export const StyledHeader = styled.header`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.08);
`

export const NavBar = styled.nav`
    & a:not(:last-child) {
        margin-right: 10px;
    }
`

export const Container = styled.div`
    width: ${baseTheme.container.desktop};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Span = styled.span`
    ${baseTheme.font.GeistMono}
`

export const Image = styled.img`
    width: 30px;
    height: 30px;
`

export const LogoContainer = styled.article`
    display: flex;
    align-items: center;
    gap: 10px;

    & img {
        margin-right: 20px;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    & img {
        margin-right: 20px;
    }

    & span {
        margin-right: 20px;
    }

    & a:not(:last-child) {
        margin-right: 20px;
    }
`

export const ThemeButton = styled.button`
    background-image: url(${sun});
    background-repeat: no-repeat;
    background-color: transparent;
    width: 34px;
    height: 34px;
    border: none;
    cursor: pointer;
`
