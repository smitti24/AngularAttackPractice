System.register(['./agentsystem.service', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var agentsystem_service_1, Observable_1;
    var AgentsService;
    return {
        setters:[
            function (agentsystem_service_1_1) {
                agentsystem_service_1 = agentsystem_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AgentsService = (function () {
                // Constructor ...
                function AgentsService(AgentSystemService) {
                    var _this = this;
                    this.AgentSystemService = AgentSystemService;
                    // Create an observable for agents ...
                    this.All = new Observable_1.Observable(function (observer) { return _this.AgentsObserver = observer; });
                    // Load all the agents ...
                    this.loadAll();
                }
                // Load all the agents ...
                AgentsService.prototype.loadAll = function () {
                    // Execute a breeze query to get all the agents, and will emit the results once received  ...  
                    // this.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents')).then((objAgents => { this.AgentsObserver.next(<Agent[]><Object>objAgents.results); });
                };
                // Get agent by id ...
                AgentsService.prototype.getAgentByID = function (strAgentID) {
                    var agentObserver;
                    var agent = new Observable_1.Observable(function (observer) { return agentObserver = observer; });
                    // this.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents').where('AgentID', '==', strAgentID)).then(function(objAgents) {
                    //     if (objAgents.results.length > 0) { agentObserver.next(<Agent><Object>objAgents.results[0]); } else { agentObserver.error("Agent not found."); }
                    // });
                    return agent;
                };
                // Create agent ...
                AgentsService.prototype.createAgent = function (initialValues) {
                    return agentsystem_service_1.AgentSystemService.EntityManager.createEntity('Agent', initialValues);
                };
                return AgentsService;
            }());
            exports_1("AgentsService", AgentsService);
        }
    }
});
//# sourceMappingURL=agents.service.js.map