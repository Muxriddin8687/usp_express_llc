import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  toggleNav: boolean = false;

  togleNav(){
    this.toggleNav = !this.toggleNav;
  }

  closeNav(){
    this.toggleNav = false;
    window.scroll(0, 0);
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('header.fixed-top') as HTMLElement;
    if (window.pageYOffset > 50) {
      element.classList.add('sticky_navigation');
    } else {
      element.classList.remove('sticky_navigation');
    }
  }

}

