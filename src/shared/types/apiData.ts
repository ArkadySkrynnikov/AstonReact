export type FilmsInitialState = {
    isLoading: boolean
    data: Awaited<Promise<ApiData>>
    error: boolean
}

export type ApiData = {
    items: FilmItem[]
    total: number
    totalPages: number
}

export type FilmItem = {
    countries: Countries[]
    genres: Genres[]
    imdbId: string
    kinopoiskId: number
    nameEn: null | string
    nameOriginal: null | string
    nameRu: string
    posterUrl: string
    posterUrlPreview: string
    ratingImdb: number
    ratingKinopoisk: number
    type: string
    year: number
}

export type Countries = {
    country: string
}

export type Genres = {
    genre: string
}

export type FilmByIdInitialState = {
    isLoading: boolean
    data: Awaited<Promise<FilmInfo>>
    error: boolean
}

export type FilmInfo = {
    kinopoiskId: number
    kinopoiskHDId: string
    imdbId: string
    nameRu: string
    nameEn: string
    nameOriginal: string
    posterUrl: string
    posterUrlPreview: string
    coverUrl: string
    logoUrl: string
    reviewsCount: number
    ratingGoodReview: number
    ratingGoodReviewVoteCount: number
    ratingKinopoisk: number
    ratingKinopoiskVoteCount: number
    ratingImdb: number
    ratingImdbVoteCount: number
    ratingFilmCritics: number
    ratingFilmCriticsVoteCount: number
    ratingAwait: number
    ratingAwaitCount: number
    ratingRfCritics: number
    ratingRfCriticsVoteCount: number
    webUrl: string
    year: number
    filmLength: number
    slogan: string
    description: string
    shortDescription: string
    editorAnnotation: string
    isTicketsAvailable: boolean
    productionStatus: string
    type: string
    ratingMpaa: string
    ratingAgeLimits: string
    hasImax: boolean
    has3D: boolean
    lastSync: string
    countries: Countries[]
    genres: Genres[]
    startYear: number
    endYear: number
    serial: boolean
    shortFilm: boolean
    completed: boolean
}

export type apiQueryFiltersType = {
    order: string
    type: string
    ratingFrom: string
    ratingTo: string
    yearFrom: string
    yearTo: string
    keyword: string
    page: string
}
