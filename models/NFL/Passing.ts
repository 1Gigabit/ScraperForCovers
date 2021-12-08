import { Tabletojson } from "tabletojson";

export class Passing {
    headers: Array<string>
    away: Array<PassingRow>
    home: Array<PassingRow>
    constructor(headers: Array<string>, away: Array<PassingRow>, home: Array<PassingRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): Passing {
        
        const headers: Array<string> = [
            "Player", "C/ATT", "YDS", "TD", "INT"
        ]
        const away: Array<PassingRow> = [];
        const home: Array<PassingRow> = [];
        tables[4].forEach((row,index) => {
            away.push(new PassingRow(row["Player"],row["C/ATT"],row["YDS"],row["TD"],row["INT"]));
        });
        tables[14].forEach((row,index) => {
            away.push(new PassingRow(row["Player"],row["C/ATT"],row["YDS"],row["TD"],row["INT"]));
        });
        return new Passing(headers,away,home);
    }
}
class PassingRow {
    Player: string
    'C/ATT': string
    YDS: string
    TD: string
    INT: string
    constructor(Player: string,CATT: string,YDS: string, TD: string, INT: string){
        this.Player = Player;
        this["C/ATT"] = CATT;
        this.YDS = YDS;
        this.TD = TD;
        this.INT = INT;
    }
}