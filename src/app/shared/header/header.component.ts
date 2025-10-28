import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  screenWidth = signal<number>(window.innerWidth);

  navItems = [
    { label: 'Inicio', sectionId: 'inicio' },
    { label: 'Sobre', sectionId: 'sobre' },
    { label: 'Projetos', sectionId: 'projetos' },
    // { label: 'Contato', sectionId: 'contato' },
  ];

  @HostListener('window:resize')
  onResize() {
    // console.log("window.innerWidth", window.innerWidth);
    this.screenWidth.set(window.innerWidth);
    this.screenWidth() > 730 ? this.isMenuOpen.set(false) : null;
  }

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (this.isMenuOpen()) this.toggleMenu();
    }
  }

  // showMobileMenu(){
  //   const mobileMenu = document.querySelector('.mobile-navigation');
  //   const icon = document.querySelector('.mobile-menu-icon')?.children[0].children[0];
  //   if(mobileMenu){
  //     mobileMenu.classList.toggle('open');
  //     icon?.classList.toggle("fa-xmark");
  //     icon?.classList.toggle("fa-bars");
  //     this.isMenuOpen = !this.isMenuOpen;
  //   }
  // }
}
