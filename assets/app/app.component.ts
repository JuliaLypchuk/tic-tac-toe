import { Component } from '@angular/core';

import { MessageService } from "./messages/message.service";
import { GameService } from "./game/game.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, GameService]
})
export class AppComponent {
}