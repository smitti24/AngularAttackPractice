import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AgentComponent} from './agent.component';
import {AgentsComponent} from './agents.component';
import {MissionComponent} from './mission.component';
import {MissionsComponent} from './missions.component';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'my-app',
    template: `<my-navbar></my-navbar>
               <router-outlet></router-outlet>`,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([    
  {path:'/agents', name: 'Agents', component: AgentsComponent,  useAsDefault: true},
  {path:'/missions', name: 'Missions', component: MissionsComponent},
  {path:'/agent/:id', name: 'Agent', component: AgentComponent},
  {path:'/mission/:id', name: 'Mission', component: MissionComponent}  
])
export class AppComponent {}
