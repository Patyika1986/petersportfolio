import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TechnologieSkillsComponent } from '../components/technologie-skills/technologie-skills.component';

@Component({
  selector: 'app-cv',
  imports: [TranslateModule,TechnologieSkillsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

}
