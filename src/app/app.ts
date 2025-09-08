import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Amritpal-Singh-learning-angular');
  //Lets make a variable
  name : string = "Amrit"
  age : string = "20"
  studysat : string = "StClair College"

  //Once you assign a var type, it is forever that type
  //name = 7 <
}

