1. 通常情况下，服务器会提供一个统一的api接口，用于处理上传文件

2. 客户但会使用post请求，请求服务器

content-type: multipart/form-data

3. 服务器如何得到上传文件

使用express中间件multer

问题： 
- 如何设置上传的文件后缀名（根据客户端的后缀名得到）
- 如何限制上传图片的大小
- 如何限制文件的后缀名
- 当发生错误时，如何响应客户端，正确时，如何响应