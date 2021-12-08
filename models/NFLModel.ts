import { NFL } from "../networking/api/NFL";
import { Fumbles } from "./NFL/Fumbles";
import { GameInfo } from "./NFL/GameInfo";
import { KickReturns } from "./NFL/KickReturns";
import { Margins } from "./NFL/Margins";
import { Passing } from "./NFL/Passing";
import { Points } from "./NFL/Points";
import { Punting } from "./NFL/Punting";
import { PuntReturns } from "./NFL/PuntReturns";
import { Receiving } from "./NFL/Receiving";
import { Rushing } from "./NFL/Rushing";
import { Sacks } from "./NFL/Sacks";
import { Tackles } from "./NFL/Tackles";
import { TeamStatistics } from "./NFL/TeamStatistics";

export class NFLModel {
    Fumbles: Fumbles
    GameInfo: GameInfo
    KickReturns: KickReturns
    Margins: Margins
    Passing: Passing
    Points: Points
    Punting: Punting
    PuntReturns: PuntReturns
    Receiving: Receiving
    Rushing: Rushing
    Sacks: Sacks
    Tackles: Tackles
    TeamStatistics: TeamStatistics
    constructor(Fumbles: Fumbles,
        GameInfo: GameInfo,
        KickReturns: KickReturns,
        Margins: Margins,
        Passing: Passing,
        Points: Points,
        Punting: Punting,
        PuntReturns: PuntReturns,
        Receiving: Receiving,
        Rushing: Rushing,
        Sacks: Sacks,
        Tackles: Tackles,
        TeamStatistics: TeamStatistics) {
            this.Fumbles = Fumbles;
            this.GameInfo = GameInfo;
            this.KickReturns = KickReturns;
            this.Margins = Margins;
            this.Passing =Passing;
            this.Points =Points;
            this.Punting = Punting;
            this.PuntReturns = PuntReturns;
            this.Receiving = Receiving;
            this.Rushing = Rushing;
            this.Sacks = Sacks;
            this.Tackles = Tackles;
            this.TeamStatistics = TeamStatistics;
    }
}