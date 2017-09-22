import { Injectable } from "@angular/core";
import { Game } from "./game.model";
import {Http} from "@angular/http";
import {AuthService} from "../auth/auth.service";
import {ErrorService} from "../errors/error.service";

@Injectable()
export class GameService {

    constructor(private http: Http, private authService: AuthService, private errorService: ErrorService) { }

    addGame(game: Game) {
        const body = JSON.stringify(game);
        const token: string = this.authService.getToken();
        console.log(token);

        const headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', token);

        return this.http.post('http://localhost:3000/game', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const game = new Game(
                    result.obj.winScore,
                    result.obj.deadHeatScore,
                    result.obj.lossScore,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.game.push(game);
                return game;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}