import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { I18nService } from '../i18n.service';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { AboutComponent } from "../about/about.component";
import { CvComponent } from "../cv/cv.component";
@Component({
  selector: 'app-home-overview',
  imports: [NavComponent, TranslateModule, AboutComponent, CvComponent],
  templateUrl: './home-overview.component.html',
  styleUrl: './home-overview.component.scss',
})
export class HomeOverviewComponent  {
  constructor(public i18nService: I18nService) {}
 
}
