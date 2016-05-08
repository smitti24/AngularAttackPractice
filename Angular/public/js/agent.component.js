System.register(['angular2/core', 'angular2/common', 'angular2/router', './AgentSystemServiceClasses/agent.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, agent_service_1;
    var AgentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agent_service_1_1) {
                agent_service_1 = agent_service_1_1;
            }],
        execute: function() {
            AgentComponent = (function () {
                function AgentComponent(_AgentService, _router, _routeParams, formBuilder) {
                    var _this = this;
                    this._AgentService = _AgentService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.IsEditable = false;
                    // Load the agent ... 
                    //this.Agent = this._AgentService.getAgentByID(this._routeParams.get('id'));
                    this._AgentService.getAgentByID(this._routeParams.get('id')).subscribe(function (agent) { return _this.Agent = agent; });
                    this.form = formBuilder.group({
                        codename: ['', common_1.Validators.required]
                    });
                }
                AgentComponent.prototype.editAgent = function () {
                    this.IsEditable = !this.IsEditable;
                };
                AgentComponent = __decorate([
                    core_1.Component({
                        selector: 'agent',
                        templateUrl: '../component.html/agent.component.html',
                        directives: [],
                        providers: [agent_service_1.AgentService]
                    }), 
                    __metadata('design:paramtypes', [agent_service_1.AgentService, router_1.Router, router_1.RouteParams, common_1.FormBuilder])
                ], AgentComponent);
                return AgentComponent;
            }());
            exports_1("AgentComponent", AgentComponent);
        }
    }
});
//# sourceMappingURL=agent.component.js.map