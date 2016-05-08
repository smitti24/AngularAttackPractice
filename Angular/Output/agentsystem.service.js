///<references path='./../typings/breeze.d.ts'>
////<reference path="../node_modules/angular2/ts/typings/es6-promise/es6-promise.d.ts" />
System.register(['angular2/core', './q'], function(exports_1, context_1) {
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
    var core_1, q_1;
    var AgentSystemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (q_1_1) {
                q_1 = q_1_1;
            }],
        execute: function() {
            // Configure breeze with Q/ES6 Promise adapter
            breeze.config.setQ(q_1.Q);
            AgentSystemService = (function () {
                function AgentSystemService() {
                    this.EntityManager = new breeze.EntityManager('http://localhost/AgentSystem/breeze/AgentSystem');
                }
                // Add ...
                AgentSystemService.prototype.add = function (entity) {
                    this.EntityManager.addEntity(entity);
                };
                // Save ...
                AgentSystemService.prototype.saveChanges = function () {
                    this.EntityManager.saveChanges();
                };
                // Agents ... 
                AgentSystemService.prototype.getAgents = function () {
                    var objAgentSystemService = this;
                    return new Promise(function (resolve, reject) {
                        objAgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents')).then(function (objAgents) { resolve(objAgents.results); });
                    });
                };
                // getAgentByID(strAgentID: string): Promise<Agent> {
                //     var objAgentSystemService: AgentSystemService = this;
                //     return new Promise(function(resolve, reject) {
                //         objAgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents').where('AgentID', '==', strAgentID)).then(function(objAgents) {
                //             if (objAgents.results.length > 0) { resolve(objAgents.results[0]); } else { reject(); }                 
                //         });
                //     });        
                // }
                AgentSystemService.prototype.createAgent = function (initialValues) {
                    return this.EntityManager.createEntity('Agent', initialValues);
                };
                // Missions ... 
                AgentSystemService.prototype.getMissions = function () {
                    var objAgentSystemService = this;
                    return new Promise(function (resolve, reject) {
                        objAgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Missions')).then(function (objAgents) { resolve(objAgents.results); });
                    });
                };
                AgentSystemService.prototype.createMission = function (initialValues) {
                    return this.EntityManager.createEntity('Mission', initialValues);
                };
                // Agent Status ...
                AgentSystemService.prototype.getAgentStatuses = function () {
                    var objAgentSystemService = this;
                    return new Promise(function (resolve, reject) {
                        objAgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('AgentStatus')).then(function (objAgentStatuses) { resolve(objAgentStatuses.results); });
                    });
                };
                AgentSystemService.prototype.createAgentStatus = function (initialValues) {
                    return this.EntityManager.createEntity('AgentStatus', initialValues);
                };
                // Mission Status ...
                AgentSystemService.prototype.getMissionStatuses = function () {
                    var objAgentSystemService = this;
                    return new Promise(function (resolve, reject) {
                        objAgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('MissionStatus')).then(function (objMissionStatus) { resolve(objMissionStatus.results); });
                    });
                };
                AgentSystemService.prototype.createMissionStatus = function (initialValues) {
                    return this.EntityManager.createEntity('MissionStatus', initialValues);
                };
                AgentSystemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AgentSystemService);
                return AgentSystemService;
            }());
            exports_1("AgentSystemService", AgentSystemService);
        }
    }
});
//# sourceMappingURL=agentsystem.service.js.map