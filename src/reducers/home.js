import { HOME_STATUS_FULFILLED, HOME_NAV_FULFILLED } from '../constants/home'

const HOME = {
  listData: [],
  navData: []
}

export default function home(state = HOME, { type, payload }) {
  switch (type) {
    case HOME_STATUS_FULFILLED:
      return {
        ...state,
        listData: payload,
      }

    case HOME_NAV_FULFILLED:
      return {
        ...state,
        navData: payload,
      }

    default:
      return {
        ...state,
        ...payload,
      }
  }
}