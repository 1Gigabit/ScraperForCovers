import { Tabletojson } from "tabletojson";

export class PuntReturns {
    headers: Array<string>
    away: Array<PuntReturnRow>
    home: Array<PuntReturnRow>
    constructor(headers: Array<string>, away: Array<PuntReturnRow>, home: Array<PuntReturnRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): PuntReturns {
        
        const headers = ["Player", "NO", "YDS", "LG"];
        const away: Array<PuntReturnRow> = [];
        const home: Array<PuntReturnRow> = [];
        tables[12].forEach(row => {
            away.push(new PuntReturnRow(row["Player"], row["NO"], row["YDS"], row["LG"]));
        });
        tables[22].forEach(row => {
            home.push(new PuntReturnRow(row["Player"], row["NO"], row["YDS"], row["LG"]));
        });
        return new PuntReturns(headers, away, home);
    }
}
class PuntReturnRow {
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