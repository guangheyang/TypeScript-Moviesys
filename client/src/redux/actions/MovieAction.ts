import { ThunkAction } from "redux-thunk";
import { ISearchCondition } from "../../services/CommonTypes";
import { IMovie, MovieService } from "../../services/MovieService";
import { IAction } from "../actions/ActionTypes";
import { IRootState } from "../reducers/RootReducer";

export type SaveMoviesAction = IAction<"movie_save", {
  movies: IMovie[],
  total: number
}>
function saveMoviesAction(movies: any, total: number): SaveMoviesAction {
  return {
    type: 'movie_save',
    payload: {
      movies,
      total
    }
  }
}

export type SetLoadingAction = IAction<"movie_setLoading", boolean>
function setLoadingAction(isLoading: boolean): SetLoadingAction {
  return {
    type: 'movie_setLoading',
    payload: isLoading
  }
}

export type SetConditionAction = IAction<"movie_setCondition", ISearchCondition>
function setConditionAction(condition: ISearchCondition): SetConditionAction {
  return {
    type: 'movie_setCondition',
    payload: condition
  }
}

export type DeleteAction = IAction<"movie_delete", string>
function deleteAction(id: string): DeleteAction {
  return {
    type: 'movie_delete',
    payload: id
  }
}

export type MovieActions = SaveMoviesAction | SetConditionAction | SetLoadingAction | DeleteAction

// 根据条件从服务器获取电影数据
function fetchMovies(condition: ISearchCondition): ThunkAction<Promise<void>, IRootState, any, MovieActions> {
  return async (dispatch, getState) => {
    // 1.设置加载状态
    dispatch(setLoadingAction(true))
    // 2.设置条件
    dispatch(setConditionAction(condition))
    // 3.获取服务器数据
    const curCondition = getState().movie.condition
    const res = await MovieService.getMovies(curCondition)
    // 4.更改仓库数据
    dispatch(saveMoviesAction(res.data, res.total))
    // 5.关闭加载状态
    dispatch(setLoadingAction(false))
  }
}

function deleteMovie(id: string): ThunkAction<Promise<void>, IRootState, any, MovieActions> {
  return async dispatch => {
    dispatch(setLoadingAction(true))
    await MovieService.delete(id)
    // 删除本地仓库数据
    dispatch(deleteAction(id))
    dispatch(setLoadingAction(false))
  }
}

export default {
  saveMoviesAction,
  setConditionAction,
  setLoadingAction,
  deleteAction,
  fetchMovies
}