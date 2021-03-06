import "reflect-metadata"
import express from 'express'
import MoiveRoute from './routes/MoiveRoute'
import UploadRoute from './routes/UploadRoute'
import history from 'connect-history-api-fallback'

const app = express()
app.use(history())
app.use('/', express.static('public/build'))
app.use('/upload', express.static('public/upload'))

// 配置中间件，用于解析请求消息体中的json格式数据
app.use(express.json())

app.use('/api/movie', MoiveRoute)

app.use('/api/upload', UploadRoute)
app.listen(3000)