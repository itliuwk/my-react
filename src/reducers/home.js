import { HOME_STATUS_FULFILLED } from '../constants/home'

const HOME = {
  listData: []
}

export default function home(state = HOME, { type, payload }) {
  switch (type) {
    case HOME_STATUS_FULFILLED:
      return {
        ...state,
        listData: payload,
      }

    default:
      return {
        ...state,
        ...payload,
      }
  }
}