export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    count: 1,
    wishlist: [],
    countwish: 0,
    card: []
}
export const reducer = (state, action) => {
    let result = state
    switch (action.type) {
        case "ADD_WIShLIST":
            let index = state.wishlist.findIndex(pro => pro.id === action.payload.id)
            if (index < 0) {
                result = { ...state, wishlist: [...state.wishlist, action.payload] }
                localStorage.getItem("storage", JSON.stringify(result))
                return result
            } else {
                result = { ...state, wishlist: state.wishlist.filter(pro => pro.id !== action.payload.id) }
                localStorage.getItem("storage", JSON.stringify(result))
                return result
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