import React from "react";
import { RouteComponentProps } from "react-router";
import MovieForm from "../../components/MovieForm";
import { MovieService } from "../../services/MovieService";

interface IParams {
  id: string
}
export default class extends React.Component<RouteComponentProps<IParams>> {
  state = {
    image: ''
  }
  render() {
    return (
      <MovieForm onSubmit={async (movie) => {
        const rep = await MovieService.add(movie)
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
      }></MovieForm>
    )
  }
}