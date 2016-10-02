// config file
requirejs.config({
  baseUrl: 'js',
  paths: {
     jquery: 'lib/jquery.min',
     metaCore: 'lib/min/functions-min',
     metaApi: 'lib/min/metaApi-min'
  }
});

// starting
require(['config'],function(){
  require(['min/init-min'])
});
