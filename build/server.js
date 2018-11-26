"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var path = require('path');
var open = require('open');
var webpack_1 = __importDefault(require("webpack"));
var webpack_config_dev_1 = __importDefault(require("../webpack.config.dev"));
var port = 3000;
var app = express();
var compiler = webpack_1.default(webpack_config_dev_1.default);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpack_config_dev_1.default.output.publicPath
}));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});
