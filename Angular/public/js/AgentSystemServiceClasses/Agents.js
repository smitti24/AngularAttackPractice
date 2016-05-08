System.register(['rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var Agents;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            Agents = (function () {
                // Constructor ...
                function Agents(EntityManager) {
                    var _this = this;
                    this.EntityManager = EntityManager;
                    // Create an observable for agents ...
                    this.All = new Observable_1.Observable(function (observer) { return _this.AgentsObserver = observer; });
                    // Load all the agents ...
                    this.loadAll();
                }
                // Load all the agents ...
                Agents.prototype.loadAll = function () {
                    // Execute a breeze query to get all the agents, and will emit the results once received  ...  
                    // this.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents')).then((objAgents => { this.AgentsObserver.next(<Agent[]><Object>objAgents.results); });
                };
                // Get agent by id ...
                Agents.prototype.getAgentByID = function (strAgentID) {
                    var agentObserver;
                    var agent = new Observable_1.Observable(function (observer) { return agentObserver = observer; });
                    // this.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents').where('AgentID', '==', strAgentID)).then(function(objAgents) {
                    //     if (objAgents.results.length > 0) { agentObserver.next(<Agent><Object>objAgents.results[0]); } else { agentObserver.error("Agent not found."); }
                    // });
                    return agent;
                };
                // Create agent ...
                Agents.prototype.createAgent = function (initialValues) {
                    return this.EntityManager.createEntity('Agent', initialValues);
                };
                return Agents;
            }());
            exports_1("Agents", Agents);
        }
    }
});
//# sourceMappingURL=agents.js.map