module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    const Category = require('../../models/Category')

    // 创建资源
    router.post('/categories', async(req, res) => {
            const model = await Category.create(req.body)
            res.send(model)
        })
        // 更新资源
    router.put('/categories/:id', async(req, res) => {
            const model = await Category.findByIdAndUpdate(req.params.id, req.body)
            res.send(model)
        })
        // 删除资源
    router.delete('/categories/:id', async(req, res) => {
            await Category.findByIdAndDelete(req.params.id)
            res.send({
                success: true
            })
        })
        // 资源列表
    router.get('/categories', async(req, res) => {
            const items = await Category.find().limit(10)
            res.send(items)
                // const queryOptions = {}
                // if (req.Model.modelName === 'Category') {
                //     queryOptions.populate = 'parent'
                // }
                // const items = await Category.find().setOptions(queryOptions).limit(100)
                // res.send(items)
        })
        //     // 资源详情
    router.get('/categories/:id', async(req, res) => {
        const model = await Category.findById(req.params.id)
        res.send(model)
    })

    app.use('/admin/api', router)

}