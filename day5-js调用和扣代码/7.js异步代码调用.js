function getAsyncDate(num){
    return new Promise(function (resolve,reject){
      let number=num
      if (number >=10){
          resolve(number);
      }  else {
          resolve("number 小于10");
      }
    });
}

getAsyncDate(123).then(function (response){
    console.log(response)
})
var express=require('express')
const readline = require("node:readline");


var app=express()
app.get('/user',function (request,response){
    num1=request.query['aaa']
    getAsyncDate(num1).then(function (data){
        response.send(data)
    })
})


app.listen(8080,function (){
    console.log('我启动了')
})