import { Link } from '../../shared/UI/Link/Link.tsx'
import logo from '../../assets/icons/icons8-film-reel-96.png'
import { FunctionComponent, ReactElement, useContext } from 'react'
import profile from '../../assets/icons/icons8-profile-picture-96.png'
import { Button } from '../../shared/UI/button/Button.tsx'
import {
    Container,
    LogoContainer,
    NavBar,
    Span,
    StyledHeader,
    Image,
    Profile,
    ThemeButton,
} from './header.styled.ts'
import { ThemeContext } from '../../app/context/ThemeContext.tsx'

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
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <StyledHeader>
            <Container>
                <LogoContainer>
                    <Link type={'logo'} to={'/'}>
                        <Image src={logo} />
                        <Span>Search Films</Span>
                    </Link>
                    <ThemeButton onClick={toggleTheme}></ThemeButton>
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
