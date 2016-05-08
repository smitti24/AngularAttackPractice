///<reference path="./../../typings/breeze.d.ts" />
import {Injectable} from 'angular2/core';
import {AgentSystemService} from './agentsystem.service';
import {Agent} from '../DataClasses/Agent'
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class AgentService {
    All: Observable<Agent[]>;
    AgentsObserver: Observer<Agent[]>; 
        
    // Constructor ...
    constructor(private _AgentSystemService: AgentSystemService) {
        
        // Create an observable for agents ...
        this.All = new Observable(observer => this.AgentsObserver = observer);
         
        // Load all the agents ...
        this.loadAll();
    }
    
    // Load all the agents ...
    loadAll() {
        
        // Execute a breeze query to get all the agents, and will emit the results once received  ...  
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents')).then(objAgents => { this.AgentsObserver.next(<Agent[]><Object>objAgents.results); });
    }

    // Get agent by id ...
    getAgentByID(strAgentID: String): Observable<Agent> {
        
        // Create a new observable to return ...
        let agentObserver: Observer<Agent>;
        let agent: Observable<Agent> = new Observable(observer => agentObserver = observer);

        // Execute a query to get the agent by id, and return the results via the observable ...
        this._AgentSystemService.EntityManager.executeQuery(new breeze.EntityQuery().from('Agents').where('AgentID', '==', strAgentID)).then(function(objAgents) {
            if (objAgents.results.length > 0) { 
                agentObserver.next(<Agent><Object>objAgents.results[0]); } else { agentObserver.error("Agent not found."); 
            }
        });
        
        // Return the observable ...
        return agent;
    }

    // Create agent ...
    createAgent(initialValues): Agent {
        
        // Create a new agent via the entity manager and return it ...
        return <Agent><Object>this._AgentSystemService.EntityManager.createEntity('Agent', initialValues);
    }
}