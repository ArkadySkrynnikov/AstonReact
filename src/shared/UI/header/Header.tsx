import Link from '../link/Link.tsx'
import styled from 'styled-components'
import { baseTheme } from '../../../app/styles/theme.ts'

const StyledHeader = styled.header`
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.08);
`

const NavBar = styled.nav``

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Span = styled.span`
    ${baseTheme.font.GeistMono}
`

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Span>Search Films</Span>
                <NavBar>
                    <Link to={'/search'}>Поиск</Link>
                    <Link to={'/history'}>История</Link>
                </NavBar>
            </Container>
        </StyledHeader>
    )
}

export default Header
