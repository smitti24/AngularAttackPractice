///<reference path="./../typings/breeze.d.ts" />
import {Component, Input} from 'angular2/core';
import {FormBuilder, ControlGroup , Control, Validators} from 'angular2/common'
import {Router, RouteParams} from 'angular2/router';
import {Agent} from './DataClasses/Agent';
import {AgentStatus} from './DataClasses/AgentStatus';
import {AgentService} from './AgentSystemServiceClasses/agent.service';
import {AgentSystemService} from './AgentSystemServiceClasses/agentsystem.service'
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
    IsEditable: Boolean = false;
    form: ControlGroup;
    
    constructor(private _AgentService: AgentService, private _router: Router, private _routeParams: RouteParams, formBuilder: FormBuilder,private _agentSystem:AgentSystemService) {
        
        // Load the agent ... 
        //this.Agent = this._AgentService.getAgentByID(this._routeParams.get('id'));
        this._AgentService.getAgentByID(this._routeParams.get('id')).subscribe((agent:Agent)=>this.Agent = agent);
        
        this.form = formBuilder.group({
            codename: ['', Validators.required],
            name:['', Validators.required],
            surname:['', Validators.required]
        })
    }
    
    editAgent(){
        this.IsEditable =!this.IsEditable;
    }
    
    saveAgent(){
        if(this.form.valid){
            console.log(this.form.value)
            this._agentSystem.saveChanges()
            this.IsEditable =!this.IsEditable;
        }
        
    }
    
}