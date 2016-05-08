System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AgentStatuses;
    return {
        setters:[],
        execute: function() {
            AgentStatuses = (function () {
                // Constructor ...
                function AgentStatuses(entityManager) {
                    this.EntityManager = entityManager;
                }
                // Get all agent statuses ...
                AgentStatuses.prototype.getAgentStatuses = function () {
                    var objAgentStatuses = this;
                    return new Promise(function (resolve, reject) {
                        objAgentStatuses.EntityManager.executeQuery(new breeze.EntityQuery().from('AgentStatus')).then(function (objAgentStatuses) { resolve(objAgentStatuses.results); });
                    });
                };
                // Create agent status ...
                AgentStatuses.prototype.createAgentStatus = function (initialValues) {
                    return this.EntityManager.createEntity('AgentStatus', initialValues);
                };
                return AgentStatuses;
            }());
            exports_1("AgentStatuses", AgentStatuses);
        }
    }
});
//# sourceMappingURL=agentstatus.js.map