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
    var MissionService;
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
            MissionService = (function () {
                // Constructor ...
                function MissionService(_AgentSystemService) {
                    var _this = this;
                    this._AgentSystemService = _AgentSystemService;
                    // Create an observable for missions ...
                    this.All = new Observable_1.Observable(function (observer) { return _this.MissionsObserver = observer; });
                    // Load all the agents ...
                    this.loadAll();
                }
                // Load all the agents ...
                MissionService.prototype.loadAll = function () {
                    var _this = this;
                    // Execute a breeze query to get all the missions, and will emit the results once received  ...  
                    this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Missions')).then(function (objMissions) { _this.MissionsObserver.next(objMissions.results); });
                };
                // Get mission by id ...
                MissionService.prototype.getMissionByID = function (strMissionID) {
                    // Create a new observable to return ...
                    var missionObserver;
                    var mission = new Observable_1.Observable(function (observer) { return missionObserver = observer; });
                    // Execute a query to get the mission by id, and return the results via the observable ...
                    this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Missions').where('MissionID', '==', strMissionID)).then(function (objMissions) {
                        if (objMissions.results.length > 0) {
                            missionObserver.next(objMissions.results[0]);
                        }
                        else {
                            missionObserver.error("Mission not found.");
                        }
                    });
                    // Return the observable ...
                    return mission;
                };
                // Create mission ...
                MissionService.prototype.createAgent = function (initialValues) {
                    // Create a new mission via the entity manager and return it ...
                    return this._AgentSystemService.EntityManager.createEntity('Mission', initialValues);
                };
                MissionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [agentsystem_service_1.AgentSystemService])
                ], MissionService);
                return MissionService;
            }());
            exports_1("MissionService", MissionService);
        }
    }
});
//# sourceMappingURL=mission.service.js.map