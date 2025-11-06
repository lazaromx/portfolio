import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, ProjectsComponent, HomeComponent, AboutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
