import {AchievementLevel} from './AchievementLevel'
import {Agent} from './Agent'

export class Achievement {
    AchievementID: String;
    AgentID: String;
    Description: String;
    Date: Date;
    AchievementLevelID: String;

    AchievementLevel: AchievementLevel;
    Agent: Agent;

    constructor() { }
}
