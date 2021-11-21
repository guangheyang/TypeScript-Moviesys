import { ClassConstructor, plainToClass } from "class-transformer"
import { validate } from "class-validator"

export abstract class BaseEntity {
  /**
  * 验证静态对象
  */
  public async validatorThis(skipUndefinedProperties = false): Promise<string[]> {
    const errors = await validate(this, {
      skipUndefinedProperties // 为true可跳过缺失属性验证
    })
    const temp = errors.map(e => Object.values({ ...e.constraints }))
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
  public static baseTransform<T>(cls: ClassConstructor<T>, plainObject: object): T {
    if (plainObject instanceof cls) {
      return plainObject
    }
    return plainToClass(cls, plainObject)
  }
}