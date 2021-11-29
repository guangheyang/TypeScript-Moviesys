import { Reducer } from "react";
import { ISearchCondition } from "../../services/CommonTypes";
import { IMovie } from "../../services/MovieService";
import { DeleteAction, MovieActions, MovieSwitchChangeAction, SaveMoviesAction, SetConditionAction, SetLoadingAction } from "../actions/MovieAction";

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

const changeSwitch: MovieReducer<MovieSwitchChangeAction> = function(state, action) {
  // 根据id找到对象
  const movie = state.data.find(d => d._id === action.payload.id)
  if (!movie) return state
  // 克隆
  const newMovie = {  ...movie }
  newMovie[action.payload.type] = action.payload.newVal
  // 将对象重新放回数组
  const newData = state.data.map(d => {
    if (d._id === action.payload.id) {
      return newMovie
    }
    return d
  })
  return {
    ...state,
    data: newData
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
    case 'movie_switch':
      return changeSwitch(state, action)
    default:
      return state
  }
}