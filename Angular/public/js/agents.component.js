System.register(['angular2/core', './AgentSystemServiceClasses/agent.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, agent_service_1, router_1;
    var AgentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (agent_service_1_1) {
                agent_service_1 = agent_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AgentsComponent = (function () {
                // Constructor ...
                function AgentsComponent(_AgentService, _router) {
                    this._AgentService = _AgentService;
                    this._router = _router;
                    _AgentService.setValue(true);
                    console.log(this._AgentService.getValue());
                    this.Agents = this._AgentService.All;
                }
                // onSelect ...
                AgentsComponent.prototype.onSelect = function (agent) {
                    // Navigate to the agent with the id ...
                    this._router.navigate(['Agent', { id: agent.AgentID }]);
                };
                AgentsComponent = __decorate([
                    core_1.Component({
                        selector: 'agents',
                        templateUrl: '../component.html/agents.component.html',
                        directives: [],
                        providers: [agent_service_1.AgentService]
                    }), 
                    __metadata('design:paramtypes', [agent_service_1.AgentService, router_1.Router])
                ], AgentsComponent);
                return AgentsComponent;
            }());
            exports_1("AgentsComponent", AgentsComponent);
        }
    }
});
//     Test() {
//         
//         this._AgentSystemService.getAgentStatuses().then((arrAgentStatuses:AgentStatus[]) => {
//             let objAgent = this.Agents[0];
//             objAgent.Codename = '111';
// 
//             let newAgent : Agent = this._AgentSystemService.createAgent({AgentID: 'a0c5dc81-fad5-44a2-b9c0-4b8759622e87'});
//             
//             newAgent.Codename = '0071';
//             newAgent.AgentID = 'a0c5dc81-fad5-44a2-b9c0-4b8759622e87';
//             newAgent.EncyptedPassword = objAgent.EncyptedPassword;       
//             newAgent.AgentStatus = arrAgentStatuses[0];
//             
//             this._AgentSystemService.add(<breeze.Entity><Object>newAgent);
//             
//             this._AgentSystemService.saveChanges();
//         });
//     } 
//# sourceMappingURL=agents.component.js.map