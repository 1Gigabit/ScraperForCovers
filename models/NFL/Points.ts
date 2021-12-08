import { Tabletojson } from 'tabletojson';
export class Points {
    headers: Array<string>;
    away: Array<Array<string>>;
    home: Array<Array<string>>;
    constructor(away: Array<Array<string>>, home: Array<Array<string>>, headers: Array<string>) {
        this.away = away;
        this.home = home;
        this.headers = headers;
    }
    public static from(tables: any[]) {
        
        const headers = ["Team", "1", "2", "3", "4", "Total"];
        const away = [tables[0][0]["0"],
        tables[0][0]["1"],
        tables[0][0]["2"],
        tables[0][0]["3"],
        tables[0][0]["4"],
        tables[0][0]["Total"]];
        const home = [tables[0][1]["0"],
        tables[0][1]["1"],
        tables[0][1]["2"],
        tables[0][1]["3"],
        tables[0][1]["4"],
        tables[0][1]["Total"]];
        return new Points(away, home,headers);
    }
}