import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,  Router} from 'angular2/router';

@Component({
    selector: 'my-navbar',
    templateUrl: '../component.html/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    router: Router;

    constructor(_router: Router) {
        this.router = _router;
    }    
}
