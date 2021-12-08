import { Tabletojson } from "tabletojson";

export class Punting {
    headers: Array<string>
    away: Array<PuntingRow>
    home: Array<PuntingRow>
    constructor(headers: Array<string>, away: Array<PuntingRow>, home: Array<PuntingRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): Punting {
        
        const headers = ["Player", "NO", "YDS", "LG"];
        const away: Array<PuntingRow> = [];
        const home: Array<PuntingRow> = [];
        tables[11].forEach(row => {
            away.push(new PuntingRow(row["Player"],row["NO"],row["YDS"],row["LG"]));
        });
        tables[21].forEach(row => {
            home.push(new PuntingRow(row["Player"],row["NO"],row["YDS"],row["LG"]));
        })
        return new Punting(headers,away,home);
    }
}
class PuntingRow {
    Player: string
    NO: string
    YDS: string
    LG: string
    constructor(Player: string, NO: string, YDS: string, LG: string) {
        this.Player = Player;
        this.NO = NO;
        this.YDS = YDS;
        this.LG = LG;
    }
}