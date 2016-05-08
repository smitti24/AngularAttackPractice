///<reference path="./../../typings/breeze.d.ts" />
import {Injectable} from 'angular2/core';
import {AgentSystemService} from './agentsystem.service';
import {MissionStatus} from '../DataClasses/MissionStatus'
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class MissionStatusService {
    All: Observable<MissionStatus[]>;
    MissionStatusObserver: Observer<MissionStatus[]>; 
        
    // Constructor ...
    constructor(private _AgentSystemService: AgentSystemService) {
        
        // Create an observable for agents ...
        this.All = new Observable(observer => this.MissionStatusObserver = observer);
         
        // Load all the agent statuses ...
        this.loadAll();
    }
    
    // Load all the agent statuses ...
    loadAll() {
        
        // Execute a breeze query to get all the agent statuses, and will emit the results once received  ...  
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('MissionStatus')).then(objMissionStatuses => { this.MissionStatusObserver.next(<MissionStatus[]><Object>objMissionStatuses.results); });
    }

    // Get agent status by id ...
    getAgentByID(strMissionStatusID: String): Observable<MissionStatus> {
        
        // Create a new observable to return ...
        let missionStatusObserver: Observer<MissionStatus>;
        let agent: Observable<MissionStatus> = new Observable(observer => missionStatusObserver = observer);

        // Execute a query to get the agent status by id, and return the results via the observable ...
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('MissionStatus').where('MissionStatusID', '==', strMissionStatusID)).then(function(objMissionStatuses) {
            if (objMissionStatuses.results.length > 0) { 
                missionStatusObserver.next(<MissionStatus><Object>objMissionStatuses.results[0]); } else { missionStatusObserver.error("Agent status not found."); 
            }
        });
        
        // Return the observable ...
        return agent;
    }

    // Create agent status ...
    createAgent(initialValues): MissionStatus {
        
        // Create a new agent via the entity manager and return it ...
        return <MissionStatus><Object>this._AgentSystemService.EntityManager.createEntity('MissionStatus', initialValues);
    }
}