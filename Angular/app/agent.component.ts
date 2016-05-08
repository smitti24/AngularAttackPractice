///<reference path="./../typings/breeze.d.ts" />
import {Component, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Agent} from './DataClasses/Agent';
import {AgentStatus} from './DataClasses/AgentStatus';
import {AgentService} from './AgentSystemServiceClasses/agent.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'agent',
    templateUrl: '../component.html/agent.component.html',
    directives: [],
    providers: [AgentService]
})
export class AgentComponent {
    //Agent:  Observable<Agent>;
    Agent:  Agent;
    
    constructor(private _AgentService: AgentService, private _router: Router, private _routeParams: RouteParams) {
        
        // Load the agent ... 
        //this.Agent = this._AgentService.getAgentByID(this._routeParams.get('id'));
        this._AgentService.getAgentByID(this._routeParams.get('id')).subscribe((agent:Agent)=>this.Agent = agent);
    }
}