import fetch from 'node-fetch';
import * as cliProgress from 'cli-progress';
import { Tabletojson } from 'tabletojson';
import { Fumbles } from '../../models/NFL/Fumbles';
import { GameInfo } from '../../models/NFL/GameInfo';
import { KickReturns } from '../../models/NFL/KickReturns';
import { Margins } from '../../models/NFL/Margins';
import { Passing } from '../../models/NFL/Passing';
import { Points } from '../../models/NFL/Points';
import { Punting } from '../../models/NFL/Punting';
import { PuntReturns } from '../../models/NFL/PuntReturns';
import { Receiving } from '../../models/NFL/Receiving';
import { Rushing } from '../../models/NFL/Rushing';
import { Sacks } from '../../models/NFL/Sacks';
import { Tackles } from '../../models/NFL/Tackles';
import { TeamStatistics } from '../../models/NFL/TeamStatistics';
import { NFLModel } from '../../models/NFLModel';
import * as fs from 'fs'
export class NFL {
    base_URL: string = "https://www.covers.com/sport/football/nfl/boxscore/";
    game_id: string;
    body: string;
    tables
    constructor(game_id: string) {
        this.game_id = game_id;
        this.body = "";
    }
    public async initBody(delay: number, bar: undefined | cliProgress.Bar): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            setTimeout(async () => {
                this.body = (await (await fetch(this.base_URL + this.game_id)).text()).toString()
                if (bar != undefined) bar.increment(1);
                // this.tables = Tabletojson.convert(this.body);
                resolve();
            }, delay);
        });
    }

    public initTable(): NFL {
        this.tables = Tabletojson.convert(this.body);
        return this;
    }
    public getGameInfo(): GameInfo | undefined {
        return GameInfo.from(this.body);
    }
    public getPoints(): Points {
        return Points.from(this.tables);
    }
    public getMargins(): Margins {
        return Margins.from(this.tables);
    }
    public getTeamStatistics(): TeamStatistics {
        return TeamStatistics.from(this.tables);
    }
    public getPassing(): Passing {
        return Passing.from(this.tables);
    }
    public getRushing(): Rushing {
        return Rushing.from(this.tables);
    }
    public getReceiving(): Receiving {
        return Receiving.from(this.tables);
    }
    public getSacks(): Sacks {
        return Sacks.from(this.tables);
    }
    public getTackles(): Tackles {
        return Tackles.from(this.tables);
    }
    public getFumbles(): Fumbles {
        return Fumbles.from(this.tables);
    }
    public getPunting(): Punting {
        return Punting.from(this.tables);
    }
    /**
     * 
     * @returns PuntReturns
     */
    public getPuntReturns(): PuntReturns {
        return PuntReturns.from(this.tables);
    }
    /**
     * 
     * @returns KickReturns
     */
    public getKickReturns(): KickReturns {
        return KickReturns.from(this.tables);
    }
    public getNFLModel(): NFLModel {
        return new NFLModel(
            this.getFumbles(),
            this.getGameInfo(),
            this.getKickReturns(),
            this.getMargins(),
            this.getPassing(),
            this.getPoints(),
            this.getPunting(),
            this.getPuntReturns(),
            this.getReceiving(),
            this.getRushing(),
            this.getSacks(),
            this.getTackles(),
            this.getTeamStatistics()
        )
    }

    /**
     * 
     * @param game_ids
     * @param delay Delay between requests
     */
    public static async getNFLModels(game_ids: Array<string>, delay: number): Promise<Array<NFLModel>> {
        const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
        console.log(`\nBegin fetching`)
        bar.start(game_ids.length, 0);
        return new Promise(async (resolve, reject) => {
            let totalDelay = 0;
            let results: Array<NFLModel> = [];
            let nfls = game_ids.map((game_id) => {
                return new NFL(game_id);
            });
            const promises = nfls.map((nfl) => {
                totalDelay += delay;
                return nfl.initBody(totalDelay, bar);
            });
            await Promise.all(promises);
            nfls = await this.initTables(nfls, true);
            nfls.forEach((nfl) => {
                results.push(nfl.getNFLModel());
            })
            resolve(results);
        })
    }
    public static getNFLModelsStream(game_ids: Array<string>, delay: number, file: fs.WriteStream): Promise<void> {
        const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
        console.log(`\nBegin fetching [STREAMED]`)
        bar.start(game_ids.length, 0);
        let totalDelay = 0;
        let nfls = game_ids.map((game_id) => {
            return new NFL(game_id);
        })
        
        return new Promise(async (resolve) => {
            nfls.map(async (nfl) => {
                await nfl.initBody(totalDelay += delay, bar);
                file.write(JSON.stringify(nfl)+"\n")
            })
            resolve();
        })
    }
    public static async initTables(nfls: Array<NFL>, barEnabled: boolean): Promise<NFL[]> {
        console.log("\nBegin parsing (VERY CPU INTENSIVE)")
        if (barEnabled) {
            var bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
            bar.start(nfls.length, 0);
        }
        return nfls.map((nfl) => {
            if (barEnabled) bar.increment(1);
            return nfl.initTable();
        })
    }
}
