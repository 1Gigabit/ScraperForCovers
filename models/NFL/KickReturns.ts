import { Tabletojson } from "tabletojson";

export class KickReturns {
    headers: Array<string>
    away: Array<KickReturnsRow>
    home: Array<KickReturnsRow>
    constructor(headers: Array<string>, away: Array<KickReturnsRow>, home: Array<KickReturnsRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): KickReturns {
        
        const headers = ["Player", "NO", "YDS", "LG"];
        const away: Array<KickReturnsRow> = [];
        const home: Array<KickReturnsRow> = [];
        tables[13].forEach(row => {
            away.push(new KickReturnsRow(row["Player"], row["NO"], row["YDS"], row["LG"]));
        });
        tables[23].forEach(row => {
            home.push(new KickReturnsRow(row["Player"], row["NO"], row["YDS"], row["LG"]));
        });
        return new KickReturns(headers, away, home);
    }
}
class KickReturnsRow {
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