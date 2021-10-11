export const initialState = {
    basket: [],
    user: null,
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING ITEM TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }


        case 'REMOVE_FROM_BASKET':
            // logic for removing from basket...

            // we cloned the basket
            let newBasket = [...state.basket];

            // we check to see if product exists,
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // then item exist in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id:${action.id}) as its not in the basket.`
                );
            }


            return {
                ...state,
                basket: newBasket,
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;