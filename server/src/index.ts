import "reflect-metadata"
import { MovieModel } from './db'
import { Movie } from "./entities/Movie"
import { MovieService } from "./services/MoiveService"

// const m = new Movie();
// m.name = '123';

// m.validatorThis().then(res => {
//   console.log(res, 'res')
// })

const m: any = {
  name: 'qiao',
  timeLong: 120,
  poster: 'www.baidu.com',
  types: ['中国大陆'],
  description: '',
  areas: ['haerbin']
}

MovieService.findById("619a48413a3adf61ecf0dda3").then(error => {
  console.log(error)
})