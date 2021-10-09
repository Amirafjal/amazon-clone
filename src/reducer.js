export const initialState = {
    basket: [],
    // user: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING ITEM TO BASKET 
            break;
        case 'REMOVE_FROM_BASKET':
            // logic for removing from BASKet
            break;
        default:
            return state;
    }
}

export default reducer;