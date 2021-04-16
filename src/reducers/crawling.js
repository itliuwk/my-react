import { CRAWLING_LS_CREATE_FULFILLED, CRAWLING_LS_CREATE_UPDATE_FULFILLED, CRAWLING_ALL_DELTE_FULFILLED, CRAWLING_LS_LIST_CREATE_FULFILLED, CRAWLING_NAV_CREATE_FULFILLED, CRAWLING_TOOLS_CREATE_FULFILLED } from '../../constants/crawling'

const CRAWLING = {
  listData: []
}

export default function home(state = CRAWLING, { type, payload }) {
  switch (type) {
    case CRAWLING_LS_CREATE_FULFILLED:
      return {
        ...state,
        listData: payload,
      }
    case CRAWLING_LS_CREATE_UPDATE_FULFILLED:
      return {
        ...state,
        listData: payload,
      }
    case CRAWLING_ALL_DELTE_FULFILLED:
      return {
        ...state,
        listData: payload,
      }
    case CRAWLING_LS_LIST_CREATE_FULFILLED:
      return {
        ...state,
        listData: payload,
      }
    case CRAWLING_NAV_CREATE_FULFILLED:
      return {
        ...state,
        listData: payload,
      }
    case CRAWLING_TOOLS_CREATE_FULFILLED:
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