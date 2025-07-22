var express=require('express')

var app=express()
app.get('/user',function (request,response){
    response.send("ccccccccccccccc")
})


app.listen(8080,function (){
    console.log('我启动了')
})