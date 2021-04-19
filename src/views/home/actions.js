import { HOME_STATUS, HOME_NAV } from '../../constants/home'
import { upd_page, nav_list } from '@/api/home'
import { GET } from '@/utils/request'


export function fetchCartList(params) {
  return GET(upd_page, params).then(res => res)
}

export function fetchNavList(params) {
  return GET(nav_list, params).then(res => res)
}

export const getHomeList = (params) => {
  return {
    type: HOME_STATUS,
    async payload() {
      let res = await fetchCartList(params)
      return res.data
    }
  }
}

export const getNavList = (params) => {
  return {
    type: HOME_NAV,
    async payload() {
      let res = await fetchNavList(params)
      return res.data
    }
  }
}