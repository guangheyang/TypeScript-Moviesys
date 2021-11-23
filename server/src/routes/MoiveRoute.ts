import express from "express"
import { SearchCondition } from "../entities/SearchCondition"
import { MovieService } from "../services/MoiveService"
import { ResponseHelper } from "./ResponseHelper"

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const movieId = req.params.id
    const movie = await MovieService.findById(movieId)
    // 响应：服务器的接口响应格式，往往是一种标准格式
    ResponseHelper.sendData(movie, res)
  } catch {
    ResponseHelper.sendData(null, res)
  }
})
router.get('/', async (req, res) => {
  const result = await MovieService.find(req.query as unknown as SearchCondition)
  ResponseHelper.sendPageData(result, res)
})

router.post('/', async (req, res) => {
  const result = await MovieService.add(req.body)
  if (Array.isArray(result)) {
    ResponseHelper.sendError(result, res)
  } else {
    ResponseHelper.sendData(result, res)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const movieId = req.params.id
    const result = await MovieService.edit(movieId, req.body)
    if (result.length > 0) {
      ResponseHelper.sendError(result, res)
    } else {
      ResponseHelper.sendData(true, res)
    }
  } catch {
    ResponseHelper.sendError("id错误", res)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const movieId = req.params.id
    await MovieService.delete(movieId)
    ResponseHelper.sendData(true, res)
  } catch {
    ResponseHelper.sendError("id错误", res)
  }
})
export default router