(function() {
    'use strict';

    angular
        .module('viModule')
        .run(runBlock);

    /** @ngInject */
    function runBlock($http, $log, $location) {
        RegExp.escape = function(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        };

        if (!Array.prototype.findIndex) {

            Array.prototype.findIndex = function(fun) {

                if (!fun) {
                    return -1;
                }
                for (var i = 0; i < this.length; i++) {

                    if (fun(this[i])) {
                        return i;
                    }
                }
            };
        }
	hljs.registerLanguage('java',document['hljs.javahl']);
	hljs.registerLanguage('xml',document['hljs.xmlhl']);
	hljs.registerLanguage('css',document['hljs.csshl']);
	hljs.registerLanguage('scss',document['hljs.scsshl']);
        $log.debug('runBlock end');
    }

})();
