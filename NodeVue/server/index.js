const express = require("express")

const app = express()

app.use(require('cors')()) //跨域 
app.use(express.json())

require('./routes/admin')(app) //后端接口
require('./plugins/db')(app) //数据库接口


app.listen(3000, () => {
    console.log('http://localhost:3000');
});