///<reference path="./../../typings/breeze.d.ts" />
import {Injectable} from 'angular2/core';
import {Q} from '../q';

// Configure breeze with Q/ES6 Promise adapter
breeze.config.setQ(<breeze.promises.IPromiseService>Q);

@Injectable()
export class AgentSystemService {
    EntityManager: breeze.EntityManager;
    
    // Constructor ...
    constructor()
    {
        // Create a new entity manager instance ...
        this.EntityManager = new breeze.EntityManager('http://sdrsa34/AgentSystem/breeze/AgentSystem');
    }
    
    // Add ...
    add(entity: breeze.Entity) {
        this.EntityManager.addEntity(entity);
    }
    
    // Save ...
    saveChanges() {
        this.EntityManager.saveChanges();
    }
}