System.register(['angular2/core', './agentsystem.service', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, agentsystem_service_1, Observable_1;
    var AgentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (agentsystem_service_1_1) {
                agentsystem_service_1 = agentsystem_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AgentService = (function () {
                // Constructor ...
                function AgentService(_AgentSystemService) {
                    var _this = this;
                    this._AgentSystemService = _AgentSystemService;
                    // Create an observable for agents ...
                    this.All = new Observable_1.Observable(function (observer) { return _this.AgentsObserver = observer; });
                    // Load all the agents ...
                    this.loadAll();
                }
                // Load all the agents ...
                AgentService.prototype.loadAll = function () {
                    var _this = this;
                    // Execute a breeze query to get all the agents, and will emit the results once received  ...  
                    this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents')).then(function (objAgents) { _this.AgentsObserver.next(objAgents.results); });
                };
                // Get agent by id ...
                AgentService.prototype.getAgentByID = function (strAgentID) {
                    // Create a new observable to return ...
                    var agentObserver;
                    var agent = new Observable_1.Observable(function (observer) { return agentObserver = observer; });
                    // Execute a query to get the agent by id, and return the results via the observable ...
                    this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents').where('AgentID', '==', strAgentID)).then(function (objAgents) {
                        if (objAgents.results.length > 0) {
                            agentObserver.next(objAgents.results[0]);
                        }
                        else {
                            agentObserver.error("Agent not found.");
                        }
                    });
                    // Return the observable ...
                    return agent;
                };
                // Create agent ...
                AgentService.prototype.createAgent = function (initialValues) {
                    // Create a new agent via the entity manager and return it ...
                    return this._AgentSystemService.EntityManager.createEntity('Agent', initialValues);
                };
                AgentService.prototype.setValue = function (val) {
                    this.CanNavigate = val;
                };
                AgentService.prototype.getValue = function () {
                    return this.CanNavigate;
                };
                AgentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [agentsystem_service_1.AgentSystemService])
                ], AgentService);
                return AgentService;
            }());
            exports_1("AgentService", AgentService);
        }
    }
});
//# sourceMappingURL=agent.service.js.map