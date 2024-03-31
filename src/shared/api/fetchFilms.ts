export async function fetchFilms(queryString: string) {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_KINOPOISK_API}${queryString}`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'X-API-KEY': import.meta.env.VITE_KINOPOISK_API_KEY,
                },
            },
        )
        return await response.json()
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message)
        }
    }
}
