import { CARD_ADD_ITEM } from '../constants/cartConstants'
import { CARD_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)

      if (existItem) {
        return {
          //that has all existing data
          ...state,
          //but add this
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        //jesli nie bedzie sie rownal existItem to dodaj go do tablicy cartItemow
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    case CARD_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (element) => element.product !== action.payload
        ),
      }

    default:
      return state
  }
}
