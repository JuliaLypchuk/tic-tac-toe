import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { GameComponent } from "./game/game.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/game', pathMatch: 'full' },
    { path: 'game', component: GameComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);