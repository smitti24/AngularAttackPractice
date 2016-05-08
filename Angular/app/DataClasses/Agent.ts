import {AgentLocation} from './AgentLocation'
import {AgentStatus} from './AgentStatus'
import {Goal} from './Goal'
import {Achievement} from './Achievement'
import {Message} from './Message'

export class Agent {
    AgentID: String;
    Codename: String;
    EncyptedPassword: String;
    AgentStatusID: String;
    Photo: any;
    Name: String;
    Surname: String;

    AgentLocations: AgentLocation[];
    AgentStatus: AgentStatus;
    Goals: Goal[];
    Achievement: Achievement[];
    Message: Message[];

    constructor() { }
}
