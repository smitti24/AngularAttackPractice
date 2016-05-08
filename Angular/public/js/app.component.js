System.register(['angular2/core', 'angular2/router', './agent.component', './agents.component', './mission.component', './missions.component', './navbar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, agent_component_1, agents_component_1, mission_component_1, missions_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agent_component_1_1) {
                agent_component_1 = agent_component_1_1;
            },
            function (agents_component_1_1) {
                agents_component_1 = agents_component_1_1;
            },
            function (mission_component_1_1) {
                mission_component_1 = mission_component_1_1;
            },
            function (missions_component_1_1) {
                missions_component_1 = missions_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<my-navbar></my-navbar>\n               <router-outlet></router-outlet>",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/agents', name: 'Agents', component: agents_component_1.AgentsComponent, useAsDefault: true },
                        { path: '/missions', name: 'Missions', component: missions_component_1.MissionsComponent },
                        { path: '/agent/:id', name: 'Agent', component: agent_component_1.AgentComponent },
                        { path: '/mission/:id', name: 'Mission', component: mission_component_1.MissionComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map