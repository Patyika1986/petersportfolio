import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TechnologieSkillsComponent } from "../components/technologie-skills/technologie-skills.component";

@Component({
  selector: 'app-about',
  imports: [NgFor, TranslateModule, TechnologieSkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent{
  icons = [
    'HTML5',
    'CSS3',
    'JavaScript ',
    'TypeScript ',
    'Angular ',
    'Git ',
    'Node.js ',
    'Express ',
    'Bootstrap ',
    'Materialize ',
    'React ',
    'Vue.js ',
    'NPM ',
    'Jasmine ',
    'Karma ',
    'Vercel',
    'MySQL',
    'Firebase',
    'Firestore',
    'Cloud Firestore',
    'Realtime Database',
    'Cloud Storage',
    'Cloud Functions',
    'Authentication',
  ];

}
