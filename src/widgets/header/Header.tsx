import styled from 'styled-components'
import { baseTheme } from '../../app/styles/theme.ts'
import { Link } from '../../shared/UI/Link/Link.tsx'
import logo from '../../assets/icons/icons8-film-reel-96.png'
import { FunctionComponent, ReactElement } from 'react'
import profile from '../../assets/icons/icons8-profile-picture-96.png'
import { Button } from '../../shared/UI/button/Button.tsx'

const StyledHeader = styled.header`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.08);
`

const NavBar = styled.nav`
    & a:not(:last-child) {
        margin-right: 10px;
    }
`

const Container = styled.div`
    width: ${baseTheme.container.desktop};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Span = styled.span`
    ${baseTheme.font.GeistMono}
`

const Image = styled.img`
    width: 30px;
    height: 30px;
`

const LogoContainer = styled.article`
    display: flex;
    align-items: center;
    & img {
        margin-right: 20px;
    }
`

const Profile = styled.div`
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

type HeaderProps = {
    username: string | null
    isAuth: boolean
    logOutFn: () => void
}

const Header: FunctionComponent<HeaderProps> = ({
    username,
    isAuth,
    logOutFn,
}): ReactElement => {
    return (
        <StyledHeader>
            <Container>
                <LogoContainer>
                    <Link type={'logo'} to={'/'}>
                        <>
                            <Image src={logo} />
                            <Span>Search Films</Span>
                        </>
                    </Link>
                </LogoContainer>

                {isAuth && (
                    <NavBar>
                        <Link type={'route'} to={'/history'}>
                            История
                        </Link>
                        <Link type={'route'} to={'/search'}>
                            Расширенный поиск
                        </Link>
                        <Link type={'route'} to={'/favorites'}>
                            Избранное
                        </Link>
                    </NavBar>
                )}

                {isAuth ? (
                    <Profile>
                        <Image src={profile} />
                        <Span>{username}</Span>
                        <Button onClick={logOutFn} variant={'primary'}>
                            Выйти
                        </Button>
                    </Profile>
                ) : (
                    <Profile>
                        <Link to={'/login'} type={'route'}>
                            Войти
                        </Link>
                        <Link to={'/register'} type={'route'}>
                            Регистрация
                        </Link>
                    </Profile>
                )}
            </Container>
        </StyledHeader>
    )
}

export { Header }
