const INITIAL_STATE = {
    data: {}
}

export const addressReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SEARCH_IP':
            return state = {
                data: action.payload
            }

            case 'SEARCH_DOMAIN':
            return state = {
                data: action.payload
            }

        default:
            return state
    }
}