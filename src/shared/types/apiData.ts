export type filmsInitialState = {
    isLoading: boolean
    data: Awaited<Promise<ApiData>>
    error: boolean
}

export type ApiData = {
    items: filmItem[]
    total: number
    totalPages: number
}

export type filmItem = {
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

export type filmByIdInitialState = {
    isLoading: boolean
    data: Awaited<Promise<filmInfo>>
    error: boolean
}

export type filmInfo = {
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
