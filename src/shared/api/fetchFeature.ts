export async function fetchFeature() {
    try {
        const response = await fetch('http://localhost:3000/api/feature-flags')
        return response.json()
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message)
        }
    }
}
