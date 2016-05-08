import {Agent} from './Agent'
import {Goal} from './Goal'

export class Message {
    MessageID: String;
    GoalID: String;
    AgentID: String;
    MessageTime: Date;
    Message1: String;

    Agent: Agent;
    Goal: Goal;

    constructor() { }
}
