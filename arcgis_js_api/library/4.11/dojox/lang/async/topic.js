//>>built
define(["dojo","dijit","dojox"],function(b,h,g){b.provide("dojox.lang.async.topic");(function(){var f=g.lang.async.topic;f.from=function(e){return function(){var a,c=function(){a&&(b.unsubscribe(a),a=null)},d=new b.Deferred(c);a=b.subscribe(e,function(){c();d.callback(arguments)});return d}};f.failOn=function(e){return function(){var a,c=function(){a&&(b.unsubscribe(a),a=null)},d=new b.Deferred(c);a=b.subscribe(e,function(a){c();d.errback(Error(arguments))});return d}}})()});