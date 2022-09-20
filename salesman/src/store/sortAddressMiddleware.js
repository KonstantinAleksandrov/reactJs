import { sortRoute } from './routeReducer'
export const sortAddressMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    next(action)
    if (action.type === 'CREATE_ROUTE' || action.type === 'DEL_ADDRESS') {
        const { routeReducer } = getState()
        const addresses = routeReducer.addresses
        addresses.sort((a, b) => {
            const distanceA = Math.abs(Math.sqrt(Math.pow(a.longitude, 2) + Math.pow(a.latitude, 2)))
            const distanceB = Math.abs(Math.sqrt(Math.pow(b.longitude, 2) + Math.pow(b.latitude, 2)))
            if (distanceA > distanceB) {
                return 1
            }
            if (distanceA < distanceB) {
                return -1
            }
            if (distanceA === distanceB) {
                return 0
            }
        })
        dispatch(sortRoute(addresses))
    }
}