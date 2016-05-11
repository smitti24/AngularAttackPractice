import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,  Router} from 'angular2/router';
import {AgentService} from './AgentSystemServiceClasses/agent.service';
@Component({
    selector: 'my-navbar',
    templateUrl: '../component.html/navbar.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[AgentService]
})
export class NavbarComponent {
    router: Router;

    constructor(_router: Router, private _agentService:AgentService) {
        this.router = _router;
        localStorage.setItem('canNavigate', 'true')
    }
    
    navigateTo(routerURL){
        
        console.log(routerURL + "-" + localStorage.getItem('canNavigate'))
        if (localStorage.getItem('canNavigate')=='true'){
            this.router.navigate([routerURL])
        }
    }    
}
