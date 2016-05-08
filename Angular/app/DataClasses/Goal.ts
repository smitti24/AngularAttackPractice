import {Agent} from './Agent'
import {Coordinate} from './Coordinate'
import {Mission} from './Mission'
import {Message} from './Message'

export class Goal {
    GoalID: String;
    MissionID: String;
    AgentID: String;
    CoordinateID: String;
    AgentFeedback: String;
    AgentCompletedFlag: boolean;
    CompletionDate: Date;

    Agent: Agent;
    Coordinate: Coordinate;
    Mission: Mission;
    Message: Message[];

    constructor() { }
}
