import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  imports: [NgClass, NgIf],
  standalone: true,
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {

  isScrolled = false; 
  isMenuOpen = false;


   @HostListener('window:scroll', [])
    onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
