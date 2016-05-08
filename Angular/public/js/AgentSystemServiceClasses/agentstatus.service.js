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
    var AgentStatusService;
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
            AgentStatusService = (function () {
                // Constructor ...
                function AgentStatusService(_AgentSystemService) {
                    var _this = this;
                    this._AgentSystemService = _AgentSystemService;
                    // Create an observable for agents ...
                    this.All = new Observable_1.Observable(function (observer) { return _this.AgentStatusObserver = observer; });
                    // Load all the agent statuses ...
                    this.loadAll();
                }
                // Load all the agent statuses ...
                AgentStatusService.prototype.loadAll = function () {
                    var _this = this;
                    // Execute a breeze query to get all the agent statuses, and will emit the results once received  ...  
                    this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('AgentStatus')).then(function (objAgentStatuses) { _this.AgentStatusObserver.next(objAgentStatuses.results); });
                };
                // Get agent status by id ...
                AgentStatusService.prototype.getAgentByID = function (strAgentStatusID) {
                    // Create a new observable to return ...
                    var agentStatusObserver;
                    var agent = new Observable_1.Observable(function (observer) { return agentStatusObserver = observer; });
                    // Execute a query to get the agent status by id, and return the results via the observable ...
                    this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('AgentStatus').where('AgentStatusID', '==', strAgentStatusID)).then(function (objAgentStatuses) {
                        if (objAgentStatuses.results.length > 0) {
                            agentStatusObserver.next(objAgentStatuses.results[0]);
                        }
                        else {
                            agentStatusObserver.error("Agent status not found.");
                        }
                    });
                    // Return the observable ...
                    return agent;
                };
                // Create agent status ...
                AgentStatusService.prototype.createAgent = function (initialValues) {
                    // Create a new agent via the entity manager and return it ...
                    return this._AgentSystemService.EntityManager.createEntity('AgentStatus', initialValues);
                };
                AgentStatusService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [agentsystem_service_1.AgentSystemService])
                ], AgentStatusService);
                return AgentStatusService;
            }());
            exports_1("AgentStatusService", AgentStatusService);
        }
    }
});
//# sourceMappingURL=agentstatus.service.js.map