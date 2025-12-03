import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RandomJokeService } from './randomjoke.service.';

@Component({
    selector: 'app-randomjoke',
    standalone: true, 
    imports: [CommonModule],
    templateUrl: './randomjoke.html',
    styleUrls: ['./randomjoke.css'],
})
export class RandomJokeComponent {
    constructor(private randomJokeService: RandomJokeService) { }

    get joke() {
        return this.randomJokeService.joke;
    }

    ngOnInit():void{
        this.loadJoke()
    }
    loadJoke() {
        this.randomJokeService.fetchJoke().subscribe();
    }
}
