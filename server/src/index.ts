import "reflect-metadata"
import { validate } from "class-validator";
import { plainToClass } from "class-transformer"
import { Movie } from "./entities/Movie";
const m: any = {}
m.name = "第一炉香"
// m.name = 123
m.types = ['爱情']
m.areas = ["中国大陆"]
m.isClassic = true
m.timeLong = 120

const movie = plainToClass(Movie, m as object)
console.log(movie)
validate(movie).then(error => {
  console.log(error)
})