
interface Window {
}

interface Error {
  code?: number
  info?: object
  data?: any
}

// 列表接口分页的类型定义
interface IPageQuery {
  page_index: number
  page_size: number
}

interface IPageQueryRes {
  size: number
}
interface IPageQuery2 {
  pageIndex: number
  pageSize: number
}

interface IPageQueryRes2 {
  pageIndex: number
  pageSize: number
  records: number
}

interface IStoreState {
  counter: ICounterApi.ICounterInitialState
}

