import { HOME_STATUS } from '../../constants/home'
import { upd_page } from '@/api/home'
import { GET } from '@/utils/request'


export function fetchCartList(params) {
  return GET(upd_page, params).then(res => res)
}

export const getHomeList = (params) => {
  return {
    type: HOME_STATUS,
    async payload() {
      let list = await fetchCartList(params)
      return list
    }
  }
}