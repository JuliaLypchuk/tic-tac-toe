export class Game {
    winScore: number;
    deadHeatScore: number;
    lossScore: number;
    username: string;
    gameId?: string;
    userId?: string;

    constructor( winScore: number, deadHeatScore: number, lossScore: number,
                 username: string, gameId?: string, userId?: string) {

        this.winScore = winScore;
        this.deadHeatScore = deadHeatScore;
        this.lossScore = lossScore;
        this.username = username;
        this.gameId = gameId;
        this.userId = userId;
    }
}