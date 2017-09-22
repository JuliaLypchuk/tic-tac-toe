import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <!--<nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/game']">Tic-Tac-Toe</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                </ul>
            </nav>-->

            <div class="row text-center">
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img src="img/tic-tac-toe.png" alt="Tic-Tac-toe">
                        <li routerLinkActive="active"><a [routerLink]="['/game']">Tic-Tac-Toe</a></li>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img src="img/chat.png" alt="Chat">
                        <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img src="img/auth2.png" alt="Auth">
                        <li routerLinkActive="active"><a [routerLink]="['/auth']">Authentication</a></li>
                    </div>
                </div>
            </div>
            
            
        </header>
    `
})
export class HeaderComponent {

}