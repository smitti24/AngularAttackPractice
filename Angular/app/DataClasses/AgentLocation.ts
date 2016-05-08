import {Agent} from './Agent'
import {AgentLocationCoordinate} from './AgentLocationCoordinate'

export class AgentLocation {
    AgentLocationID: String;
    DateRecorded: Date;
    AgentID: String;

    Agent: Agent;
    Coordinates: AgentLocationCoordinate[];

    constructor() { }
}
