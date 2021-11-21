import "reflect-metadata"
import { MovieModel } from './db'
import { MovieService } from "./services/MoiveService"

const cond: any = {
  page: 1,
  limit: 5,
  key: '10'
}
MovieService.find(cond).then(res => {
  if (res.errors.length > 0) {
    console.log(res.errors)
  } else {
    res.data.forEach(d => {
      console.log(d.name)
    })
  }
  console.log(res.count)
})