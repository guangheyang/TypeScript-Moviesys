import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, Max, Min, validate } from 'class-validator';
import { plainToClass, Type } from "class-transformer";
export class Movie {
  @IsNotEmpty({ message: '电影名称不能为空' })
  @Type(() => String)
  public name: string
  @IsNotEmpty({ message: '电影类型不能为空' })
  @IsArray({ message: '电影类型必须是数组' })
  @ArrayMinSize(1, { message: '电影类型至少有一个' })
  @Type(() => String)
  public types: string[]
  @IsNotEmpty({ message: '上映地区不能为空' })
  @IsArray({ message: '电影类型必须是数组' })
  @ArrayMinSize(1, { message: '上映地区至少有一个' })
  @Type(() => String)
  public areas: string[]
  @IsNotEmpty({ message: '时长不能为空' })
  @IsInt({ message: '时长必须是整数' })
  @Min(1, { message: '时长最小一分钟' })
  @Max(999999, { message: '时长过长' })
  @Type(() => Number)
  public timeLong: number
  @IsNotEmpty({ message: '是否热映不能为空' })
  @Type(() => Boolean)
  public isHot: boolean = false
  @IsNotEmpty({ message: '是否即将上映不能为空' })
  @Type(() => Boolean)
  public isComing: boolean = false
  @IsNotEmpty({ message: '是否是经典影片不能为空' })
  @Type(() => Boolean)
  public isClassic: boolean = false
  // 简介
  @Type(() => String)
  public description?: string
  // 票房
  @Min(0, { message: '票房不能小于0' })
  @Type(() => Number)
  public boxOffice?: number = 0
  @Type(() => String)
  public poster?: string

  /**
   * @returns 验证静态对象
   */
  public async validatorThis(skipUndefinedProperties = false): Promise<string[]> {
    const errors = await validate(this, {
      skipUndefinedProperties // 为true可跳过缺失属性验证
    })
    const temp = errors.map(e => Object.values({...e.constraints}))
    const result: string[] = []
    temp.forEach(t => {
      result.push(...t as string[])
    })
    return result
  }

  /**
   * @param plainObject 平面对象
   * @returns 将一个平面对象转换为Movie类的对象
   */
  public static transform(plainObject: object): Movie {
    if (plainObject instanceof Movie) {
      return plainObject
    }
    return plainToClass(Movie, plainObject)
  }
}
