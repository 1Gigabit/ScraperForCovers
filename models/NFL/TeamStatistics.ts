import { Tabletojson } from "tabletojson"
export class TeamStatistics {
    headers: Array<string>;
    away: Array<string>;
    home: Array<string>;
    constructor(headers: Array<string>, away: Array<string>, home: Array<string>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]) {
        
        const headers = ["First_downs",
            "Rushes_Yards",
            "Passing_Yards",
            "Sacked_Yards_Lost",
            "Return_Yardage",
            "Passing",
            "Punts_Average",
            "Fumbles_Lost",
            "Penalties_Yards",
            "Field_Goals",
            "Red_Zone_Efficiency",
            "Goal_To_Go_Efficiency",
            "Time_of_Possession"];
        const away = [
            tables[3][1]["1"],
            tables[3][2]["1"],
            tables[3][3]["1"],
            tables[3][4]["1"],
            tables[3][5]["1"],
            tables[3][6]["1"],
            tables[3][7]["1"],
            tables[3][8]["1"],
            tables[3][9]["1"],
            tables[3][10]["1"],
            tables[3][11]["1"],
            tables[3][12]["1"],
            tables[3][13]["1"],
        ]
        const home = [
            tables[3][1]["2"],
            tables[3][2]["2"],
            tables[3][3]["2"],
            tables[3][4]["2"],
            tables[3][5]["2"],
            tables[3][6]["2"],
            tables[3][7]["2"],
            tables[3][8]["2"],
            tables[3][9]["2"],
            tables[3][10]["2"],
            tables[3][11]["2"],
            tables[3][12]["2"],
            tables[3][13]["2"],
        ]
        return new TeamStatistics(headers,away,home);
    }
}