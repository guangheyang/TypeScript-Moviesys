import { Type } from "class-transformer"
import { IsInt, Min } from "class-validator"
import { BaseEntity } from "./BaseEntity"

export class SearchCondition extends BaseEntity{
  /**
   * 页码
   */
  @IsInt({ message: '页码必须是整数' })
  @Min(1, { message: '页码最小值为1' })
  @Type(() => Number)
  public page: number = 1

  /**
   * 每页条数
   */
  @IsInt({ message: '每页条数必须是整数' })
  @Min(1, { message: '每页条数最小值为1' })
  @Type(() => Number)
  public limit: number = 10

  /**
   * 关键词
   */
   @Type(() => String)
  public key: string = ''

  public static transform(plainObject: object): SearchCondition {
    return super.baseTransform(SearchCondition, plainObject)
  }
}