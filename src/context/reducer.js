export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    count: 1,
    wishlist: [],
    countwish: 0,
    card: [],
    token: null,
    reload: false
}
export const reducer = (state, action) => {
    let result = state
    switch (action.type) {
        case "ADD_WIShLIST":
            let index = state.wishlist.findIndex(pro => pro.id === action.payload.id)
            if (index < 0) {
                result = { ...state, wishlist: [...state.wishlist, action.payload] }
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            } else {
                result = { ...state, wishlist: state.wishlist.filter(pro => pro.id !== action.payload.id) }
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
        case "ADD_CARD":
            let cardIndex = state.card.findIndex(pro => pro.id === action.payload.id)
            if (cardIndex < 0) {
                result = { ...state, card: [...state.card, { ...action.payload, amount: 1 }] }
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            } else {
                result = {
                    ...state, card: state.card.map((pro, inx) => (
                        cardIndex === inx ? { ...pro, amount: pro.amount + 1 } : pro
                    ))
                }
                localStorage.setItem("storage", JSON.stringify(result))
                return state
            }
        case "DEC_CARD":
            let decIndex = state.card.findIndex(pro => pro.id === action.payload.id)
            result = {
                ...state, card: state.card.map((pro, inx) => (
                    decIndex === inx ? { ...pro, amount: pro.amount - 1 } : pro
                ))
            }
            localStorage.setItem("storage", JSON.stringify(result))
            return state
        case "REMOVE_CARD":
            result = {...state, card: state.card.filter(item=> item.id !== action.payload.id)}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "CLEAR_CARD":
            result = { ...state, card: [] }
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "INC":
            return { ...state, count: state.count + 1 }
        case "DEC":
            return { ...state, count: state.count - 1 }
        case "INC_WISHLIST":
            return { ...state, count: state.count + 1 }
        case "DEC_WISHLIST":
            return { ...state, count: state.count - 1 }
        case "ADD_TOKEN":
            result = {...state, token: action.payload}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "RELOAD":
            return {...state, reload: !state.reload}
        default:
            return state
    }
}