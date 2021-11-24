import express from "express"
import multer from "multer"
import path from "path"
import { ResponseHelper } from "./ResponseHelper"
const router = express.Router()
const allowedExtensions = ['.jpg', '.png', '.jiff', '.jpeg', '.bmp', '.gif']
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../../public/upload'),
  filename(req, file, cb) {
    // 文件名
    const time = new Date().getTime()
    // 后缀名
    const extname = path.extname(file.originalname)
    // 设置文件的全称
    cb(null, `${time}${extname}`)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 // 文件最大字节
  },
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname)
    if (allowedExtensions.includes(ext)) {
      cb(null, true)
    } else {
      cb(new Error('文件类型不匹配'))
    }
  }
}).single('imagefile')
// router.post('/', upload.single('imagefile'), (req, res) => {
//   console.log('上传文件')
// })

router.post('/', (req, res) => {
  upload(req, res, err => {
    if (err) {
      ResponseHelper.sendError(err.message, res)
    } else {
      const url = `/upload/${req.file?.filename}`
      ResponseHelper.sendData(url, res)
    }
  })
})
export default router