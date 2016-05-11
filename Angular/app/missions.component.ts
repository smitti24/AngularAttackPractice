///<reference path="./../typings/breeze.d.ts" />
import {Component} from 'angular2/core';
import {MissionService} from './AgentSystemServiceClasses/mission.service';
import {Router} from 'angular2/router';
import {Mission} from './DataClasses/Mission';
import {MissionStatus} from './DataClasses/MissionStatus';
import {Observable} from 'rxjs/Observable';
import {AgentService} from './AgentSystemServiceClasses/agent.service';

@Component({
    selector: 'missions',
    templateUrl: '../component.html/missions.component.html',
    directives: [],
    providers: [MissionService,AgentService] 
})
export class MissionsComponent {
    Missions: Observable<Mission[]>;
    
    // Constructor ...
    constructor(private _MissionService: MissionService, private _router: Router, private _agentService:AgentService) { 
        this.Missions = this._MissionService.All;
        this._agentService.setValue(true);
        console.log(this._agentService.getValue())
    }
    
    // onSelect ...    
    onSelect(mission: Mission) {
        
        // Navigate to the mission with the id ...
        this._router.navigate(['Mission', { id: mission.MissionID }]);
    }
}