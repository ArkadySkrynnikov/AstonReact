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
import { FeatureContext } from '../../app/context/FeatureFlag.tsx'
import * as ROUTE_PATHS from '../../app/providers/router/routePaths/pathConstants.ts'

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
    const { isTelegramShareEnabled, toggleFeature } = useContext(FeatureContext)

    return (
        <StyledHeader>
            <Container>
                <LogoContainer>
                    <Link type={'logo'} to={ROUTE_PATHS.ROOT}>
                        <Image src={logo} />
                        <Span>Search Films</Span>
                    </Link>
                    <ThemeButton onClick={toggleTheme}></ThemeButton>
                    {isTelegramShareEnabled ? (
                        ''
                    ) : (
                        <Button variant={'secondary'} onClick={toggleFeature}>
                            {String.fromCodePoint(127987)}
                        </Button>
                    )}
                </LogoContainer>
                {isAuth && (
                    <NavBar>
                        <Link type={'route'} to={ROUTE_PATHS.HISTORY}>
                            История
                        </Link>
                        <Link type={'route'} to={ROUTE_PATHS.SEARCH}>
                            Расширенный поиск
                        </Link>
                        <Link type={'route'} to={ROUTE_PATHS.FAVORITES}>
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
                        <Link to={ROUTE_PATHS.LOGIN} type={'route'}>
                            Войти
                        </Link>
                        <Link to={ROUTE_PATHS.REGISTER} type={'route'}>
                            Регистрация
                        </Link>
                    </Profile>
                )}
            </Container>
        </StyledHeader>
    )
}

export { Header }
