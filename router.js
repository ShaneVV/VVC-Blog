var Router = require('koa-router')

var router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa\'s world!'
})

module.exports = router
