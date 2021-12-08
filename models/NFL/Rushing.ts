import { Tabletojson } from "tabletojson";

export class Rushing {
    headers: Array<string>
    away: Array<RushingRow>
    home: Array<RushingRow>
    constructor(headers: Array<string>,away: Array<RushingRow>,home: Array<RushingRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): Rushing {
        
        const headers: Array<string> = ["Player","ATT","YDS","TD","LG"];
        const away: Array<RushingRow> = [];
        const home: Array<RushingRow> = [];
        tables[5].forEach(row => {
            away.push(new RushingRow(row["Player"],row["ATT"],row["YDS"],row["TD"],row["LG"]))
        });
        tables[15].forEach(row => {
            home.push(new RushingRow(row["Player"],row["ATT"],row["YDS"],row["TD"],row["LG"]))
        });
        return new Rushing(headers,away,home);
    }
}
class RushingRow {
    Player: string
    ATT: string
    YDS: string
    TD: string
    LG: string
    constructor(Player: string, ATT: string, YDS: string, TD: string, LG: string) {
        this.Player = Player;
        this.ATT = ATT;
        this.YDS = YDS;
        this.TD = TD;
        this.LG = LG;
    }
}