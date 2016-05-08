///<reference path="./../../typings/breeze.d.ts" />
import {Injectable} from 'angular2/core';
import {AgentSystemService} from './agentsystem.service';
import {Mission} from '../DataClasses/Mission'
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class MissionService {
    All: Observable<Mission[]>;
    MissionsObserver: Observer<Mission[]>; 
        
    // Constructor ...
    constructor(private _AgentSystemService: AgentSystemService) {
        
        // Create an observable for missions ...
        this.All = new Observable(observer => this.MissionsObserver = observer);
         
        // Load all the agents ...
        this.loadAll();
    }
    
    // Load all the agents ...
    loadAll() {
        
        // Execute a breeze query to get all the missions, and will emit the results once received  ...  
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Missions')).then(objMissions => { this.MissionsObserver.next(<Mission[]><Object>objMissions.results); });
    }

    // Get mission by id ...
    getMissionByID(strMissionID: String): Observable<Mission> {
        
        // Create a new observable to return ...
        let missionObserver: Observer<Mission>;
        let mission: Observable<Mission> = new Observable(observer => missionObserver = observer);

        // Execute a query to get the mission by id, and return the results via the observable ...
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Missions').where('MissionID', '==', strMissionID)).then(function(objMissions) {
            if (objMissions.results.length > 0) {
                missionObserver.next(<Mission><Object>objMissions.results[0]); } else { missionObserver.error("Mission not found."); 
            }
        });
        
        // Return the observable ...
        return mission;
    }

    // Create mission ...
    createAgent(initialValues): Mission {
        
        // Create a new mission via the entity manager and return it ...
        return <Mission><Object>this._AgentSystemService.EntityManager.createEntity('Mission', initialValues);
    }
}