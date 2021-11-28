import { Reducer } from "react";
import { ISearchCondition } from "../../services/CommonTypes";
import { IMovie } from "../../services/MovieService";
import { DeleteAction, MovieActions, SaveMoviesAction, SetConditionAction, SetLoadingAction } from "../actions/MovieAction";

export type IMovieCondition = Required<ISearchCondition> 
export interface IMovieState {
  /**
   * 电影数组
   */
  data: IMovie[]

  /**
   * 查询条件
   */
  condition: IMovieCondition

  /**
   * 总记录数
   */
  total: number

  /**
   * 是否正在加载数据
   */
  isLoading: boolean

  /**
   * 总页数
   */
  totalPage: number
}

const defaultState: IMovieState = {
  data: [],
  condition: {
    page: 1,
    limit: 10,
    key: ''
  },
  total: 0,
  isLoading: false,
  totalPage: 0
}

type MovieReducer<A> = Reducer<IMovieState, A>

const saveMovie: MovieReducer<SaveMoviesAction> = function(state, action) {
  // 写法一
  return Object.assign({}, state, {
    total: action.payload.total,
    data: action.payload.movies,
    totalPage: Math.ceil(action.payload.total / state.condition.limit)
  })
  // 写法二
  return {
    ...state,
    total: action.payload.total,
    data: action.payload.movies
  }
}

const setCondtion: MovieReducer<SetConditionAction> = function(state, action) {
  const newState = {
    ...state,
    condition: {
      ...state.condition,
      ...action.payload
    }
  }
  newState.totalPage = Math.ceil(newState.total / newState.condition.limit)
  return newState
}


const setLoading: MovieReducer<SetLoadingAction> = function(state, action) {
  return {
    ...state,
    isLoading: action.payload
  }
}

const deleteMovie: MovieReducer<DeleteAction> = function(state, action) {
  return {
    ...state,
    data: state.data.filter(m => m._id !== action.payload),
    total: state.total - 1,
    totalPage: Math.ceil((state.total - 1) / state.condition.limit)
  }
}

export default function(state: IMovieState = defaultState, action: MovieActions) {
  switch(action.type) {
    case 'movie_save':
      return saveMovie(state, action)
    case 'movie_setCondition':
      return setCondtion(state, action)
    case 'movie_setLoading':
      return setLoading(state, action)
    case 'movie_delete':
      return deleteMovie(state, action)
    default:
      return state
  }
}