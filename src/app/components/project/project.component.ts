import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [NgFor, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() name: string = '';
  @Input() tools: string[] = [];
  @Input() image: string = '';
  @Input() desc: any;
  @Input() gallery = [{src:'', alt:''}];
  @Input() liveLink: string = '';
  @Input() githubLink: string = '';


    public updateMainImage(newImage: string): void {
      this.image = newImage;
    }

}
