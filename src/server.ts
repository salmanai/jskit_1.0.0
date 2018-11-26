var express = require('express')
import {Request, Response} from "express"
var path = require('path')
var open = require('open')
import webpack from 'webpack'
import config from '../webpack.config.dev'


const port = 3000
var app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/',(req: Request, res: Response) =>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, function(err: any){
  if(err){
    console.log(err)
  }else{
    open('http://localhost:' + port)
  }
})
