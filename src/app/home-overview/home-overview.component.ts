import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { CvComponent } from "../cv/cv.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
@Component({
  selector: 'app-home-overview',
  imports: [NavComponent, TranslateModule, AboutComponent, CvComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home-overview.component.html',
  styleUrl: './home-overview.component.scss',
})
export class HomeOverviewComponent  {
  constructor() {}
    @HostListener('window:resize', ['$event'])
  
 

  goToPart(part: string) {
    const element = document.getElementById(part)as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
