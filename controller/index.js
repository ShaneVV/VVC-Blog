const getArticles = async (ctx, next) => {
    const pageNum = ctx.params.pageNum || 10
    const page = ctx.params.page || 1

    // 数据库查询步骤
    // TODO
    // await ...

    let rt = '数据库查询的文章'

    ctx.status = 200
    ctx.body = rt
}

const createArticle = async (ctx, next) => {
    const article = ctx.request.body

    // 数据库存储步骤
    // TODO
    // await

    let rt = '存储文章成功'

    ctx.status = 200
    ctx.body = rt
}

const updateArticle = async (ctx, next) => {
    const article = ctx.request.body

    // 数据库更新步骤
    // TODO
    // await

    let rt = '更新文章成功'

    ctx.status = 200
    ctx.body = rt
}

const deleteArticle = async (ctx, next) => {
    const pageId = ctx.params.pageId

    // 数据库删除步骤
    // TODO
    // await

    let rt = '文章删除成功'

    ctx.status = 200
    ctx.body = rt
}

export {
    createArticle,
    getArticles,
    updateArticle,
    deleteArticle
}
