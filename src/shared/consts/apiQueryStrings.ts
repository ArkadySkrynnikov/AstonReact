export const apiQueryFilters = {
    //сортировка по рейтингу и году RATING YEAR
    order: 'RATING',

    //сортировка по типу FILM TV_SHOW TS_SERIES MINI_SERIES ALL
    type: 'FILM',

    //минимальный рейтинг цифра 123456789 10
    ratingFrom: '1',

    //максимальный рейтинг цифра 123456789 10
    ratingTo: '10',

    //минимальный год
    yearFrom: '1000',

    //максимальный год
    yearTo: '3000',

    //ключевое слово, которое встречается в названии фильма
    keyword: '',

    //номер страницы
    page: '1',
}

export const apiQueryCollections = {
    // TOP_POPULAR_ALL: 'TOP_POPULAR_ALL',
    // TOP_POPULAR_MOVIES: 'TOP_POPULAR_MOVIES',
    // TOP_250_TV_SHOWS: 'TOP_250_TV_SHOWS',
    // TOP_250_MOVIES: 'TOP_250_MOVIES',
    // VAMPIRE_THEME: 'VAMPIRE_THEME',
    // COMICS_THEME: 'COMICS_THEME',
    // CLOSES_RELEASES: 'CLOSES_RELEASE',
    // FAMILY: 'FAMILY',
    // OSKAR_WINNERS_2021: 'OSKAR_WINNERS_2021',
    // LOVE_THEME: 'LOVE_THEME',
    // ZOMBIE_THEME: 'ZOMBIE_THEME',
    // CATASTROPHE_THEME: 'CATASTROPHE_THEME',
    // KIDS_ANIMATION_THEME: 'KIDS_ANIMATION_THEME',
    type: 'TOP_250_MOVIES',
    page: '1',
}
