import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMobileMenu(){
    const mobileMenu = document.querySelector('.mobile-navigation');
    const icon = document.querySelector('.mobile-menu-icon')?.children[0].children[0];
    if(mobileMenu){
      mobileMenu.classList.toggle('open');
      icon?.classList.toggle("fa-xmark")
    }
  }

  scrollTo(sectionId: string){
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior: 'smooth', block: 'start'});
      
    }
  }
}
