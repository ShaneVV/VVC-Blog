var Router = require('koa-router')

var router = new Router()

router.get('/', (ctx, next) => {
    // ctx.status = 200
    ctx.body = 'Hello Koa\'s world!'
})

module.exports = router
