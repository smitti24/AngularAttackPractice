///<reference path="./../typings/breeze.d.ts" />
import {Component, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Mission} from './DataClasses/Mission';
import {AgentStatus} from './DataClasses/AgentStatus';
import {MissionService} from './AgentSystemServiceClasses/mission.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'mission',
    templateUrl: '../component.html/mission.component.html',
    directives: [],
    providers: [MissionService]
})
export class MissionComponent {
    Mission: Mission;
    
    constructor(private _MissionService: MissionService, private _router: Router, private _routeParams: RouteParams) { 
        this._MissionService.getMissionByID(this._routeParams.get('id')).subscribe((mission:Mission)=>this.Mission = mission);
    }
}