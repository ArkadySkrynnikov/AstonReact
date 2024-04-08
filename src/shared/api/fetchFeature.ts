import * as ROUTE_PATHS from '../../app/providers/router/routePaths/pathConstants.ts'

export async function fetchFeature() {
    try {
        const response = await fetch(
            `${ROUTE_PATHS.API_URL}${ROUTE_PATHS.API_GET_FEATURE}`,
        )
        return response.json()
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message)
        }
    }
}
