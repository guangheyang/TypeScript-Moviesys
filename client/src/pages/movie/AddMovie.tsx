import React from "react";
import ImageUpload from "../../components/ImageUpload"
export default class extends React.Component {
  state = {
    image: ''
  }
  render() {
    return (
      <h1>
        <ImageUpload 
        curImageUrl={this.state.image}
        onChange={
          newUrl => {
            this.setState({
              image: newUrl
            })
          }
        }></ImageUpload>
      </h1>
    )
  }
}