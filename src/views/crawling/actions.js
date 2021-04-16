import { CRAWLING_LS_CREATE, CRAWLING_LS_CREATE_UPDATE, CRAWLING_ALL_DELTE, CRAWLING_LS_LIST_CREATE, CRAWLING_NAV_CREATE, CRAWLING_TOOLS_CREATE } from '../../constants/crawling'
import { LsCreate, LsCreateUpdate, LsAllDelete, LsListCreate, NavCreate, ToolsCreate } from '@/api/crawling'
import { GET } from '@/utils/request'


export function fetchLsCreate() {
  return GET(LsCreate).then(res => res)
}

export function fetchLsCreateUpdate() {
  return GET(LsCreateUpdate).then(res => res)
}


export function fetchLsAllDelete() {
  return GET(LsAllDelete).then(res => res)
}

export function fetchLsListCreate(params) {
  return GET(LsListCreate, params).then(res => res)
}

export function fetchNavCreate() {
  return GET(NavCreate).then(res => res)
}

export function fetchToolsCreate() {
  return GET(ToolsCreate).then(res => res)
}

export const getLsCreate = () => {
  return {
    type: CRAWLING_LS_CREATE,
    async payload() {
      let list = await fetchLsCreate()
      return list
    }
  }
}

export const getLsCreateUpdate = () => {
  return {
    type: CRAWLING_LS_CREATE_UPDATE,
    async payload() {
      let list = await fetchLsCreateUpdate()
      return list
    }
  }
}

export const getLsAllDelete = () => {
  return {
    type: CRAWLING_ALL_DELTE,
    async payload() {
      let list = await fetchLsAllDelete()
      return list
    }
  }
}

export const getLsListCreate = (params) => {
  return {
    type: CRAWLING_LS_LIST_CREATE,
    async payload() {
      let list = await fetchLsListCreate(params)
      return list
    }
  }
}

export const getNavCreate = () => {
  return {
    type: CRAWLING_NAV_CREATE,
    async payload() {
      let list = await fetchNavCreate()
      return list
    }
  }
}

export const getToolsCreate = () => {
  return {
    type: CRAWLING_TOOLS_CREATE,
    async payload() {
      let list = await fetchToolsCreate()
      return list
    }
  }
}