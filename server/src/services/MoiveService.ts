import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { Movie } from "../entities/Movie";

export class MovieService {
  public static async add(movie: Movie): Promise<IMovie | string[]> {
    // 1.类型转换
    movie = Movie.transform(movie)
    // 2.数据验证
    const errors = await movie.validatorThis()
    if (errors.length > 0) {
      return errors
    }
    // 3.添加到数据库
    return await MovieModel.create(movie)
  }

  public static async edit(id: string, movie: Movie): Promise<string[]> {
    const movieObj = Movie.transform(movie)
    const errors = await movieObj.validatorThis(true)
    if (errors.length > 0) {
      return errors
    }
    await MovieModel.updateOne({ _id: id }, movie)
    return []
  }

  public static async delete(id: string): Promise<void> {
    await MovieModel.deleteOne({_id: id})
  }

  public static async findById(id: string): Promise<IMovie | null> {
    return await MovieModel.findById({_id: id})
  }
}