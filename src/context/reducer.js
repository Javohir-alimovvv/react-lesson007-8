export const initialState = {
    count: 1
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + 1 }
        case "DEC":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}