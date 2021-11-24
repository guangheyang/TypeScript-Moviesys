export interface IResponseError {
  err: string
  data: null
}

export interface IResponstData<T> {
  err: ""
  data: T
}


export interface IResponstPageData<T> {
  err: ""
  total: number
  data: T
}

export interface ISearchCondition {
  page?: number
  limit?: number
  key?: string
}

