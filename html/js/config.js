// config file
require.config({
  baseUrl: 'js',
  paths: {
     jquery: 'lib/jquery.min',
     metaCore: 'lib/min/functions-min',
     metaApi: 'lib/metaApi'
  }
});

// starting
require(['config'],function(){
  require(['init'])
});
