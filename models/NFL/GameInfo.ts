export class GameInfo {
    date: string;
    location: string;
    head_official: string;
    temperature: string;
    attendance: string;
    constructor(date: string, location: string, head_official: string, temperature: string, attendance: string) {
        this.date = date;
        this.location = location;
        this.head_official = head_official;
        this.temperature = temperature;
        this.attendance = attendance;
    }
    public static from(body: string): GameInfo | undefined {
        const date = body.match(/(?<=Date:<\/b>.(\r?\n)(\r?\n)).*(?=<)/gm)[0];
        const location = body.match(/(?<=Location:<\/b>.).*(?=<br)/gm)[0];
        const head_official = body.match(/(?<=Head Official:.<\/b>(\r?\n).).*(?=<)/gm)[0];
        const temperature = body.match(/(?<=Temperature:<\/b>).*(?=.)/gm)[0].replace(/\s/gm,"");
        const attendance = body.match(/(?<=Attendance:<\/b>).*(?=<)/gm)[0].replace(/\s/gm,"");
        return new GameInfo(date,location,head_official,temperature,attendance);
    }
}