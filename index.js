var Koa = require('koa')

var app = new Koa()
var router = require('./router')

const PORT = 3000

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
    console.log('正在监听端口：', PORT)
})
