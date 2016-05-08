System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MissionStatuses;
    return {
        setters:[],
        execute: function() {
            MissionStatuses = (function () {
                // Constructor ...
                function MissionStatuses(entityManager) {
                    this.EntityManager = entityManager;
                }
                // Get all mission statuses ...
                MissionStatuses.prototype.getMissionStatuses = function () {
                    var objMissionStatuses = this;
                    return new Promise(function (resolve, reject) {
                        objMissionStatuses.EntityManager.executeQuery(new breeze.EntityQuery().from('MissionStatus')).then(function (objMissionStatus) { resolve(objMissionStatus.results); });
                    });
                };
                // Create mission status ...
                MissionStatuses.prototype.createMissionStatus = function (initialValues) {
                    return this.EntityManager.createEntity('MissionStatus', initialValues);
                };
                return MissionStatuses;
            }());
            exports_1("MissionStatuses", MissionStatuses);
        }
    }
});
//# sourceMappingURL=missionstatus.js.map