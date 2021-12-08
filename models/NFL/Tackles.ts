import { Tabletojson } from "tabletojson";

export class Tackles {
    headers: Array<string>
    away: Array<TacklesRow>
    home: Array<TacklesRow>
    constructor(headers: Array<string>, away: Array<TacklesRow>, home: Array<TacklesRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): Tackles {
        
        const headers = ["Player", "TK", "AST"];
        const away: Array<TacklesRow> = [];
        const home: Array<TacklesRow> = [];
        tables[9].forEach(row => {
            away.push(new TacklesRow(row["Player"], row["TK"], row["AST"]));
        });
        tables[19].forEach(row => {
            home.push(new TacklesRow(row["Player"], row["TK"], row["AST"]));
        });
        return new Tackles(headers,away,home);
    }
}
class TacklesRow {
    Players: string
    TK: string
    AST: string
    constructor(Players: string, TK: string, AST: string) {
        this.Players = Players;
        this.TK = TK;
        this.AST = AST;
    }
}