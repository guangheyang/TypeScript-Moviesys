import { ISearchCondition } from "../../services/CommonTypes";
import { IMovie } from "../../services/MovieService";
import { IAction } from "../actions/ActionTypes";

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

export default {
  saveMoviesAction,
  setConditionAction,
  setLoadingAction,
  deleteAction
}