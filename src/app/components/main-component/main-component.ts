import { Component } from '@angular/core';
import { Skills } from "./sections/skills/skills";
import { Projects } from "./sections/projects/projects";
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-main-component',
  imports: [Skills, Projects, Hero],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {

}
