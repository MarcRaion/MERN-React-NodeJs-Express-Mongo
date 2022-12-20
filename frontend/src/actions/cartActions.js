import axios from 'axios'
import { CARD_ADD_ITEM } from '../constants/cartConstants'
import { CARD_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/products/${id}`)

  dispatch({
    type: CARD_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CARD_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
