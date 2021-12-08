import { Tabletojson } from "tabletojson";

export class Sacks {
    headers: Array<string>
    away: Array<SacksRow>
    home: Array<SacksRow>
    constructor(headers: Array<string>, away: Array<SacksRow>, home: Array<SacksRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): Sacks {
        
        const headers = ["Player", "NO", "YDS"];
        const away: Array<SacksRow> = [];
        const home: Array<SacksRow> = [];
        tables[8].forEach(row => {
            away.push(new SacksRow(row["Player"],row["NO"],row["YDS"]));
        });
        tables[18].forEach(row => {
            home.push(new SacksRow(row["Player"],row["NO"],row["YDS"]));
        });
        return new Sacks(headers,away,home);
    }
}
class SacksRow {
    Player: string
    NO: string
    YDS: string
    constructor(Player: string, NO: string, YDS: string) {
        this.Player = Player;
        this.NO = NO;
        this.YDS = YDS
    }
}