import { validate } from "class-validator";
import { Movie } from "./entities/Movie";
const m = new Movie();
m.name = "第一炉香"
m.types = ['爱情']
m.areas = ["中国大陆"]
m.isClassic = true
m.timeLong = 120
validate(m).then(error => {
  console.log(error)
})