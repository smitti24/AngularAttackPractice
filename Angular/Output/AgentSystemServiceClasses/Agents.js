/// <reference path="./../../typings/breeze.d.ts" />
//// <reference path="../../node_modules/angular2/ts/typings/es6-promise/es6-promise.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Agents;
    return {
        setters:[],
        execute: function() {
            // import {AgentSystemService} from '../agentsystem.service.ts';
            // import {Q} from '../q';
            // 
            // // Configure breeze with Q/ES6 Promise adapter
            // breeze.config.setQ(<breeze.promises.IPromiseService>Q);
            Agents = (function () {
                // EntityManager: breeze.EntityManager;
                function Agents() {
                }
                return Agents;
            }());
            exports_1("Agents", Agents);
        }
    }
});
//# sourceMappingURL=Agents.js.map