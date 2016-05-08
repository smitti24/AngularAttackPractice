///<reference path="./../../typings/breeze.d.ts" />
import {Injectable} from 'angular2/core';
import {AgentSystemService} from './agentsystem.service';
import {AgentStatus} from '../DataClasses/AgentStatus'
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class AgentStatusService {
    All: Observable<AgentStatus[]>;
    AgentStatusObserver: Observer<AgentStatus[]>; 
        
    // Constructor ...
    constructor(private _AgentSystemService: AgentSystemService) {
        
        // Create an observable for agents ...
        this.All = new Observable(observer => this.AgentStatusObserver = observer);
         
        // Load all the agent statuses ...
        this.loadAll();
    }
    
    // Load all the agent statuses ...
    loadAll() {
        
        // Execute a breeze query to get all the agent statuses, and will emit the results once received  ...  
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('AgentStatus')).then(objAgentStatuses => { this.AgentStatusObserver.next(<AgentStatus[]><Object>objAgentStatuses.results); });
    }

    // Get agent status by id ...
    getAgentByID(strAgentStatusID: String): Observable<AgentStatus> {
        
        // Create a new observable to return ...
        let agentStatusObserver: Observer<AgentStatus>;
        let agent: Observable<AgentStatus> = new Observable(observer => agentStatusObserver = observer);

        // Execute a query to get the agent status by id, and return the results via the observable ...
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('AgentStatus').where('AgentStatusID', '==', strAgentStatusID)).then(function(objAgentStatuses) {
            if (objAgentStatuses.results.length > 0) { 
                agentStatusObserver.next(<AgentStatus><Object>objAgentStatuses.results[0]); } else { agentStatusObserver.error("Agent status not found."); 
            }
        });
        
        // Return the observable ...
        return agent;
    }

    // Create agent status ...
    createAgent(initialValues): AgentStatus {
        
        // Create a new agent via the entity manager and return it ...
        return <AgentStatus><Object>this._AgentSystemService.EntityManager.createEntity('AgentStatus', initialValues);
    }
}