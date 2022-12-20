import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQ,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQ,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'
import axios from 'axios'

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQ,
    })

    const config = {
      headers: {
        'Contenty-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/users/login',
      { email, password },
      config
    )

    //after we make this request we want to dispatch user login success, and
    //for a payload we want to sent data that we get back from up
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQ,
    })

    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.post(
      '/users',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    //login user after registration
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
