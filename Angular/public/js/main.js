System.register(['angular2/platform/browser', './app.component', 'angular2/router', './AgentSystemServiceClasses/agentsystem.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, agentsystem_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (agentsystem_service_1_1) {
                agentsystem_service_1 = agentsystem_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, agentsystem_service_1.AgentSystemService]);
        }
    }
});
//# sourceMappingURL=main.js.map