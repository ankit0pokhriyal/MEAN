const express = require('express')
const MiddleWare = require('./modular.js')
express().use('/about',MiddleWare({hello:'Hello World'})).listen(8080)