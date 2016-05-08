///<reference path="./../typings/breeze.d.ts" />
import {Component} from 'angular2/core';
import {AgentService} from './AgentSystemServiceClasses/agent.service';
import {Router} from 'angular2/router';
import {Agent} from './DataClasses/Agent';
import {AgentStatus} from './DataClasses/AgentStatus';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'agents',
    templateUrl: '../component.html/agents.component.html',
    directives: [],
    providers: [AgentService] 
})
export class AgentsComponent {
    Agents: Observable<Agent[]>;
    
    // onSelect ...
    onSelect(agent: Agent) {
        
        // Navigate to the agent with the id ...
        this._router.navigate(['Agent', { id: agent.AgentID }]);
    }

    // Constructor ...
    constructor(private _AgentService: AgentService, private _router: Router) {
        this.Agents = this._AgentService.All;
    }
    
}









//     Test() {
//         
//         this._AgentSystemService.getAgentStatuses().then((arrAgentStatuses:AgentStatus[]) => {
//             let objAgent = this.Agents[0];
//             objAgent.Codename = '111';
// 
//             let newAgent : Agent = this._AgentSystemService.createAgent({AgentID: 'a0c5dc81-fad5-44a2-b9c0-4b8759622e87'});
//             
//             newAgent.Codename = '0071';
//             newAgent.AgentID = 'a0c5dc81-fad5-44a2-b9c0-4b8759622e87';
//             newAgent.EncyptedPassword = objAgent.EncyptedPassword;       
//             newAgent.AgentStatus = arrAgentStatuses[0];
//             
//             this._AgentSystemService.add(<breeze.Entity><Object>newAgent);
//             
//             this._AgentSystemService.saveChanges();
//         });
//     }