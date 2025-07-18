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