import Mongoose from "mongoose";
import { Movie } from "../entities/Movie";

interface IMovie extends Movie, Mongoose.Document {}
const movieSchma = new Mongoose.Schema<IMovie>({
  name: String,
  types: [String],
  areas: [String],
  timeLong: Number,
  isHot: Boolean,
  isComing: Boolean,
  description: String,
  poster: String,
  boxOffice: Number
}, {
  versionKey: false
})

export default Mongoose.model<IMovie>("Moive", movieSchma)