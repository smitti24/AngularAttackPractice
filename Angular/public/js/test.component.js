///<references path='./../typings/breeze.d.ts'>
System.register(['angular2/core', './agentsystem.service'], function(exports_1, context_1) {
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
    var core_1, agentsystem_service_1;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (agentsystem_service_1_1) {
                agentsystem_service_1 = agentsystem_service_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent(_AgentSystemService) {
                    var _this = this;
                    this._AgentSystemService = _AgentSystemService;
                    // Get the agent system service ...         
                    this.AgentSystemService = _AgentSystemService;
                    // Get the agents ...
                    this.AgentSystemService.getAgents().then(function (arrAgents) { return _this.Agents = arrAgents; });
                }
                TestComponent.prototype.Test = function () {
                    var _this = this;
                    this.AgentSystemService.getAgentStatuses().then(function (arrAgentStatuses) {
                        var objAgent = _this.Agents[0];
                        objAgent.Codename = '111';
                        var newAgent = _this.AgentSystemService.createAgent({ AgentID: 'a0c5dc81-fad5-44a2-b9c0-4b8759622e87' });
                        newAgent.Codename = '0071';
                        newAgent.AgentID = 'a0c5dc81-fad5-44a2-b9c0-4b8759622e87';
                        newAgent.EncyptedPassword = objAgent.EncyptedPassword;
                        newAgent.AgentStatus = arrAgentStatuses[0];
                        _this.AgentSystemService.add(newAgent);
                        _this.AgentSystemService.saveChanges();
                    });
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'test',
                        template: "<div class=\"container-fluid\">\n                <table class=\"table table-striped table-hover\">\n                <thead>\n                    <tr>\n                    <th>#</th>\n                    <th>Codename</th>\n                    <th>Codename</th>\n                    <th>Codename</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let agent of Agents\">\n                        <td>1</td>\n                        <td>{{agent.Codename}}</td>\n                        <td>{{agent.Codename}}</td>\n                        <td>{{agent.Codename}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n                </div>\n                <div style=\"width:100px;heigth:100px;background-color:white\" (click)='Test()'>Test</div>",
                        directives: [],
                        providers: [agentsystem_service_1.AgentSystemService]
                    }), 
                    __metadata('design:paramtypes', [agentsystem_service_1.AgentSystemService])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});
//# sourceMappingURL=test.component.js.map