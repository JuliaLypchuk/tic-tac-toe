import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html'
    //styleUrls: ['game.component.css']
})

export class GameComponent implements OnInit {

    constructor() { }
    ngOnInit() { }

    visibility: boolean = false;

    x : string = "x";
    o : string = "o";
    //counter: number = 0;
    field : number;
    size: number;
    winner: boolean;
    cell : string;

    onStart(size : number) {
        this.visibility = true;
        this.field = size * size;
        for (var i = 0; i < this.field; i++) {
            this.cells[i] = "";
        }
        this.size = size;
    }

    onReload(size) {
        size = 0;
        this.size = size;
        this.field = size;
        this.visibility = false;
        this.cells.length = 0;
    }

    cells: string[] = ["x","o"];

    onMove(idx) {
        /*if (this.cells[idx] == "") {
            this.counter++;
            this.counter % 2 == 0
                ? this.cells[idx] = this.o
                : this.cells[idx] = this.x;
        }*/

        //random move by "O"
        if (this.cells[idx] == "") {
            this.cells[idx] = this.x;

            this.cell = this.cells[idx];
            this.doCheck();

            for (var i = 0; i < this.field; i++) {
                let id = Math.floor(Math.random() * this.field);
                console.log("random id = " + id);
                console.log("random cell[id] = " + this.cells[id]);
                if (this.cells[id] == "") {
                    this.cells[id] = this.o;
                    this.cell = this.cells[id];
                    this.doCheck();
                    break;
                }
            }
        }
    }
    doCheck() {
        //checking columns
        for (var i = 0; i < this.size; i++) {
            this.winner = true;
            for (var j = i; j < this.field; j = j + this.size) {
                if (this.cells[j] != this.cell) {
                    this.winner = false;
                }
            }
            if (this.winner == true) {
                alert("The " + this.cell + " win!");
            }
        }
        //checking rows
        for (var i = 0; i < this.field; i = i + this.size) {
            this.winner = true;
            for (var j = i; j < this.size + i; j++) {
                if (this.cells[j] != this.cell) {
                    this.winner = false;
                }
            }
            if (this.winner == true) {
                alert("The " + this.cell + " win!");
                break;
            }
        }
        //checking first diagonal
        this.winner = true;
        for (var i = 0; i < this.field; i = i + this.size + 1) {
            if (this.cells[i] != this.cell) {
                this.winner = false;
            }
        }
        if (this.winner == true) {
            alert("The " + this.cell + " win!");
        }
        //checking second diagonal
        this.winner = true;
        for (var i = this.size-1; i < this.field-this.size+1; i = i + this.size - 1) {
            if (this.cells[i] != this.cell) {
                this.winner = false;
            }
        }
        if (this.winner == true) {
            alert("The " + this.cell + " win!");
        }
    }

}