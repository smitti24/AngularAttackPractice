import {MissionStatus} from './MissionStatus'
import {Goal} from './Goal'

export class Mission {
    MissionID: String;
    MissionName: String;
    Description: String;
    MissionStatusID: String;
    CreationDate: Date;
    CompletionDate: String;

    MissionStatus: MissionStatus;
    Goals: Goal[];

    constructor() { }
}
