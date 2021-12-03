import React from "react";
import { RouteComponentProps } from "react-router";
import MovieForm from "../../components/MovieForm";

interface IParams {
  id: string
}

export default class extends React.Component<RouteComponentProps<IParams>> {
  render() {
    return (
      <MovieForm onSubmit={async (movie) => {
        return true
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