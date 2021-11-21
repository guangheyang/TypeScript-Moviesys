import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { BaseEntity } from "../entities/BaseEntity";
import { ISearchResult } from "../entities/CommonTypes";
import { Movie } from "../entities/Movie";
import { SearchCondition } from "../entities/SearchCondition";


export class MovieService extends BaseEntity{
  public static async add(movie: Movie): Promise<IMovie | string[]> {
    // 1.类型转换
    movie = super.baseTransform(Movie ,movie)
    // 2.数据验证
    const errors = await movie.validatorThis()
    if (errors.length > 0) {
      return errors
    }
    // 3.添加到数据库
    return await MovieModel.create(movie)
  }

  public static async edit(id: string, movie: Movie): Promise<string[]> {
    const movieObj = super.baseTransform(Movie ,movie)
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

  public static async find(condition: SearchCondition): Promise<ISearchResult<IMovie>> {
    const condObj = SearchCondition.transform(condition)
    const errors = await condObj.validatorThis(true)
    if (errors.length > 0) {
      return {
        count: 0,
        data: [],
        errors
      }
    }
    // 查询
    const data = await MovieModel.find({
      name: { $regex: new RegExp(condObj.key) }
    }).skip((condObj.page - 1) * condObj.limit).limit(condObj.limit)
    const count = await MovieModel.find({
      name: { $regex: new RegExp(condObj.key) }
    }).countDocuments()
    return {
      count,
      data,
      errors: []
    }
  }
}