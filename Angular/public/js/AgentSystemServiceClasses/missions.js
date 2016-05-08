System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Missions;
    return {
        setters:[],
        execute: function() {
            Missions = (function () {
                // Constructor ...
                function Missions(entityManager) {
                    this.EntityManager = entityManager;
                }
                // Get all missions ...
                Missions.prototype.getMissions = function () {
                    var objMissions = this;
                    return new Promise(function (resolve, reject) {
                        objMissions.EntityManager.executeQuery(new breeze.EntityQuery().from('Missions').expand('MissionStatus')).then(function (objAgents) { resolve(objAgents.results); });
                    });
                };
                // Get mission by id ...
                Missions.prototype.getMissionByID = function (strMissionID) {
                    var objMissions = this;
                    return new Promise(function (resolve, reject) {
                        objMissions.EntityManager.executeQuery(new breeze.EntityQuery().from('Missions').where('MissionID', '==', strMissionID).expand('MissionStatus')).then(function (objMissions) {
                            if (objMissions.results.length > 0) {
                                resolve(objMissions.results[0]);
                            }
                            else {
                                reject();
                            }
                        });
                    });
                };
                // Create mission ...
                Missions.prototype.createMission = function (initialValues) {
                    return this.EntityManager.createEntity('Mission', initialValues);
                };
                return Missions;
            }());
            exports_1("Missions", Missions);
        }
    }
});
//# sourceMappingURL=missions.js.map