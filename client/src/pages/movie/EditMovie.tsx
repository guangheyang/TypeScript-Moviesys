import React from "react";
import { RouteComponentProps } from "react-router";
import MovieForm from "../../components/MovieForm";
import { IMovie, MovieService } from "../../services/MovieService";

interface IParams {
  id: string
}

interface EditMovieState {
  movie?: IMovie
}

export default class extends React.Component<RouteComponentProps<IParams>, EditMovieState> {
  state: EditMovieState = {
    movie: undefined
  }

  async componentDidMount() {
    const rep = await MovieService.getMovieById(this.props.match.params.id)
    console.log(rep, 'rep')
    if (rep.data) {
      this.setState({
        movie: rep.data
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.movie && <MovieForm
          movie={this.state.movie}
          onSubmit={async (movie) => {
            const rep = await MovieService.edit(this.props.match.params.id, movie)
            if (rep.err) {
              return false
            } else {
              return true
            }
          }}
          onSuccessCallback={
            () => {
              console.log('aa')
              this.props.history.push('/movie')
            }
          }></MovieForm>}
      </div>
    )
  }
}