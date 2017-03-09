require('babel-polyfill');

var chai = require('chai');
var chairEnzyme = require('chai-enzyme');

chai.use(chairEnzyme())

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
 
