export const getFavoritesFromStorage = (userId: string): number[] => {
    const favoritesFromStorageStr = localStorage.getItem(
        `favoriteMovies_${userId}`,
    )
    if (favoritesFromStorageStr !== null) {
        return JSON.parse(favoritesFromStorageStr) || []
    }
    return []
}

export const updateFavoritesInStorage = (
    userId: string,
    movieId: number,
    isAdd: boolean,
): void => {
    const favoritesFromStorage = getFavoritesFromStorage(userId)
    let updatedFavorites: number[]

    if (isAdd) {
        updatedFavorites = [...favoritesFromStorage, movieId]
    } else {
        updatedFavorites = favoritesFromStorage.filter((id) => id !== movieId)
    }

    localStorage.setItem(
        `favoriteMovies_${userId}`,
        JSON.stringify(updatedFavorites),
    )
}
