//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","./handleDecorator","./beforeProperties"],a)})(function(a,b){function c(){return d.handleDecorator(function(a,b){e.beforeProperties(function(){this.invalidate()})(a)})}Object.defineProperty(b,"__esModule",{value:!0});var d=a("./handleDecorator"),e=a("./beforeProperties");b.alwaysRender=c;b.default=c});