requirejs.config({baseUrl:"js",paths:{jquery:"lib/jquery.min",metaCore:"lib/min/functions-min",metaApi:"lib/min/metaApi-min"}}),require(["config"],function(){require(["min/init-min"])});