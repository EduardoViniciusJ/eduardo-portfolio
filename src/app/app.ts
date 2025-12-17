import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { MainComponent } from './components/main-component/main-component';
import { FooterComponent } from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, MainComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
