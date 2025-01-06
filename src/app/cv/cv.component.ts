import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TechnologieSkillsComponent } from '../components/technologie-skills/technologie-skills.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cv',
  imports: [TranslateModule,TechnologieSkillsComponent,NgFor],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

}
