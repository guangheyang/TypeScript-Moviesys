import { Dispatch } from "react";
import MovieTable, { IMovieTableEvents } from "../../components/MovieTable";

import { connect } from 'react-redux'
import { IRootState } from "../../redux/reducers/RootReducer";
import MovieAction from "../../redux/actions/MovieAction";
import { IMovieState } from "../../redux/reducers/MovieReducer";

function mapStateToProps(state: IRootState): IMovieState {
  return state.movie
}

function mapDispatchToProps(dispatch: Dispatch<any>): IMovieTableEvents {
  return {
    onLoad() {
      dispatch(MovieAction.fetchMovies({
        page: 1,
        limit: 10,
        key: ''
      }))
    },
    onSwitchChange(type, newState, id) {
      dispatch(MovieAction.changeSwitch(type, newState, id))
    },
    async onDelete(id) {
      await dispatch(MovieAction.deleteMovie(id))
    },
    onPageChange(newPage) {
      dispatch(MovieAction.fetchMovies({
        page: newPage
      }))
    },
    onKeyChange(newKey) {
      dispatch(MovieAction.setConditionAction({
        key: newKey
      }))
    },
    onSearch() {
      dispatch(MovieAction.fetchMovies({
        page: 1
      }))
    }
  }
}

// const HOC = connect(mapStateToProps)
// const MovieContainer = HOC(MovieTable)

// export default class extends React.Component {
//   render() {
//     return (
//       <MovieContainer />
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable)