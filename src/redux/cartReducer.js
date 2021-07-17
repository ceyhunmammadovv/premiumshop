const cart = []

const cartReducer = (state = cart, action) => {

    switch (action.type) {
        case "ADD_CART":
            return [...state, action.payload]
        case "DELETTE_ITEM":
            return state = state.filter(i => Number(i.id) !== Number(action.payload))
        default:
            return state
    }
}

export default cartReducer