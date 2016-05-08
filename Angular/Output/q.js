///<references path='../node_modules/breeze-client/build/breeze.debug.js'>
///<references path='./breeze.d'>
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Q;
    return {
        setters:[],
        execute: function() {
            /**
             * Minimum for breeze breeze Q/ES6 Promise adapter
             */
            exports_1("Q", Q = {
                defer: function () {
                    var resolve;
                    var reject;
                    var promise = new Promise(function (_resolve, _reject) {
                        resolve = _resolve;
                        reject = _reject;
                    });
                    return {
                        promise: promise,
                        resolve: function (value) { resolve(value); },
                        reject: function (reason) { reject(reason); }
                    };
                },
                resolve: function (value) {
                    var deferred = Q['defer']();
                    deferred.resolve(value);
                    return deferred.promise;
                },
                reject: function (reason) {
                    var deferred = Q['defer']();
                    deferred.reject(reason);
                    return deferred.promise;
                }
            });
        }
    }
});
//# sourceMappingURL=q.js.map