export const initialState = {
    count: 1,
    wishlist: [],
    countwish: 0,
    card: []
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_WIShLIST":
            let index = state.wishlist.findIndex(pro => pro.id === action.payload.id)
            if (index < 0) {
                return { ...state, wishlist: [...state.wishlist, action.payload] }
            } else {
                return { ...state, wishlist: state.wishlist.filter(pro => pro.id !== action.payload.id) }
            }
        case "INC":
            return { ...state, count: state.count + 1 }
        case "DEC":
            return { ...state, count: state.count - 1 }
        case "INC_WISHLIST":
            return { ...state, count: state.count + 1 }
        case "DEC_WISHLIST":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}