System.register(['angular2/core', './AgentSystemServiceClasses/mission.service', 'angular2/router', './AgentSystemServiceClasses/agent.service'], function(exports_1, context_1) {
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
    var core_1, mission_service_1, router_1, agent_service_1;
    var MissionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mission_service_1_1) {
                mission_service_1 = mission_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agent_service_1_1) {
                agent_service_1 = agent_service_1_1;
            }],
        execute: function() {
            MissionsComponent = (function () {
                // Constructor ...
                function MissionsComponent(_MissionService, _router, _agentService) {
                    this._MissionService = _MissionService;
                    this._router = _router;
                    this._agentService = _agentService;
                    this.Missions = this._MissionService.All;
                    this._agentService.setValue(true);
                    console.log(this._agentService.getValue());
                }
                // onSelect ...    
                MissionsComponent.prototype.onSelect = function (mission) {
                    // Navigate to the mission with the id ...
                    this._router.navigate(['Mission', { id: mission.MissionID }]);
                };
                MissionsComponent = __decorate([
                    core_1.Component({
                        selector: 'missions',
                        templateUrl: '../component.html/missions.component.html',
                        directives: [],
                        providers: [mission_service_1.MissionService, agent_service_1.AgentService]
                    }), 
                    __metadata('design:paramtypes', [mission_service_1.MissionService, router_1.Router, agent_service_1.AgentService])
                ], MissionsComponent);
                return MissionsComponent;
            }());
            exports_1("MissionsComponent", MissionsComponent);
        }
    }
});
//# sourceMappingURL=missions.component.js.map