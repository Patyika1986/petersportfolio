import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { I18nService } from '../i18n.service';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home-overview',
  imports: [NavComponent, TranslateModule, NgFor],
  templateUrl: './home-overview.component.html',
  styleUrl: './home-overview.component.scss',
})
export class HomeOverviewComponent {
  constructor(public i18nService: I18nService) {}

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
