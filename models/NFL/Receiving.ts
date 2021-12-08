import { Tabletojson } from "tabletojson";

export class Receiving {
    headers: Array<string>
    away: Array<ReceivingRow>
    home: Array<ReceivingRow>
    constructor(headers: Array<string>, away: Array<ReceivingRow>, home: Array<ReceivingRow>) {
        this.headers = headers;
        this.away = away;
        this.home = home;
    }
    public static from(tables: any[]): Receiving {
        
        const headers = ["Player","TAR", "REC", "YDS", "TD", "LG"]
        const away: Array<ReceivingRow> = [];
        const home: Array<ReceivingRow> = [];
        tables[6].forEach(row => {
            away.push(new ReceivingRow(row["Player"],row["TAR"], row["REC"], row["YDS"], row["TD"], row["LG"]))
        });
        tables[16].forEach(row => {
            home.push(new ReceivingRow(row["Player"],row["TAR"], row["REC"], row["YDS"], row["TD"], row["LG"]))
        });
        return new Receiving(headers, away, home);
    }
}
class ReceivingRow {
    Player: string
    TAR: string
    REC: string
    YDS: string
    TD: string
    LG: string
    constructor(Player: string,TAR: string, REC: string, YDS: string, TD: string, LG: string) {
        this.Player = Player;
        this.TAR = TAR;
        this.REC = REC;
        this.YDS = YDS;
        this.TD = TD;
        this.LG = LG;
    }
}