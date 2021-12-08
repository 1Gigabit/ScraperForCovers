import { Tabletojson } from "tabletojson";

export class Fumbles {
    headers: Array<string>
    away: Array<FumblesRow>
    home: Array<FumblesRow>
    constructor(headers: Array<string>,away: Array<FumblesRow>,home: Array<FumblesRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): Fumbles {
        const headers =  ["Player","NO","LOST"];
        const away: Array<FumblesRow> = [];
        const home: Array<FumblesRow> = [];
        tables[10].forEach(row => {
            away.push(new FumblesRow(row["Player"],row["NO"],row["LOST"]));
        });
        tables[20].forEach(row => {
            home.push(new FumblesRow(row["Player"],row["NO"],row["LOST"]));
        });
        return new Fumbles(headers,away,home);
    }
}
class FumblesRow {
    Player: string
    NO: string
    LOST: string
    constructor(Player: string, NO: string, LOST: string) {
        this.Player = Player;
        this.NO = NO;
        this.LOST = LOST;
    }
}