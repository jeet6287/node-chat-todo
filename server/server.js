const path = require('path');
var express = require('express');

var port = Process.env.PORT||3000

const publicPath = path.join(__dirname,'../public')
console.log(publicPath);
var app = express();

app.use(express.static(publicPath));

app.listen(port,()=>{
  console.log(`chat server listen at port ${port}`);
})
