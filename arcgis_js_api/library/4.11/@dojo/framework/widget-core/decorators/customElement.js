//>>built
(function(b){"object"===typeof module&&"object"===typeof module.exports?(b=b(require,exports),void 0!==b&&(module.exports=b)):"function"===typeof define&&define.amd&&define(["require","exports","../registerCustomElement","../Registry"],b)})(function(b,d){function e(c){var b=c.tag,a=c.properties,d=void 0===a?[]:a,a=c.attributes,e=void 0===a?[]:a,a=c.events,f=void 0===a?[]:a,a=c.childType,h=void 0===a?g.CustomElementChildType.DOJO:a;c=c.registryFactory;var l=void 0===c?function(){return new k.default}:
c;return function(a){a.prototype.__customElementDescriptor={tagName:b,attributes:e,properties:d,events:f,childType:h,registryFactory:l}}}Object.defineProperty(d,"__esModule",{value:!0});var g=b("../registerCustomElement"),k=b("../Registry");d.customElement=e;d.default=e});