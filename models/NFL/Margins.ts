import { Tabletojson } from 'tabletojson';
export class Margins {
    away: Array<string>;
    home: Array<string>;
    headers: Array<string>;
    constructor(home: Array<string>, away: Array<string>, headers: Array<string>) {
        this.away = away;
        this.home = home;
        this.headers = headers;
    }
    public static from(tables: any[]): Margins {
        
        const headers = ["Team", "ATS (Margin)", "O/U (Margin)"];
        const away = [
            tables[1][0]["0"],
            tables[1][0]["ATS (Margin)"],
            tables[1][0]["O/U (Margin)"],
        ];
        const home = [
            tables[1][1]["0"],
            tables[1][1]["ATS (Margin)"],
            tables[1][1]["O/U (Margin)"],
        ];
        return new Margins(home, away, headers);
    }
}