import { Component } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";
import { I18nService } from '../i18n.service';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-home-overview',
  imports: [NavComponent,TranslateModule],
  templateUrl: './home-overview.component.html',
  styleUrl: './home-overview.component.scss'
})
export class HomeOverviewComponent {
  constructor(public i18nService: I18nService) {}


}
