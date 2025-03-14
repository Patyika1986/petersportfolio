import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../components/project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {

  constructor() {}

  projects = {
    stepOne: {
      image: 'image/stepone1.PNG',
      tools: [
        'Angular',
        ' TypeScript',
        ' Firebase',
        ' NGX-Paypal',
        ' RxJS',
        ' EmailJS',
      ],
      desc: 'Ein dynamisches E-commerze Webseite, mit Firebase Auth und Firebase als Backand.',
      gallery: [
        { src: 'image/stepone2.PNG', alt: 'E-Commerce Website' },
        { src: 'image/stepone3.PNG', alt: 'E-Commerce Login' },
        { src: 'image/stepone4.PNG', alt: 'E-Commerce Product Overview' },
      ],
      liveLink: 'https://step-one-theta.vercel.app/startseite',
      gitHubLink: 'https://github.com/Patyika1986/step-one',
    },
    liqui: {
      image: 'image/liqui1.PNG',
      tools: [
        'HTML5',
        ' CSS3',
        ' JavaScript',
        ' Localstorage'
      ],
      desc: 'Ein dynamisches E-commerze Webseite, mit Firebase Auth und Firebase als Backand.',
      gallery: [
        { src: 'image/liqui2.PNG', alt: 'Liqui Planner überblick' },
        { src: 'image/liqui3.PNG', alt: 'Liste überblick' },
      ],
      liveLink: 'https://haushaltsbuch-rechner.vercel.app/',
      gitHubLink: 'https://github.com/Patyika1986/Haushaltsbuch-Rechner',
    },
    pong: {
      image: 'image/pong.PNG',
      tools: [
        'HTML5',
        ' CSS3',
        ' JavaScript',
        ' Localstorage'
      ],
      desc: 'Ein dynamisches E-commerze Webseite, mit Firebase Auth und Firebase als Backand.',
      gallery: [
      ],
      liveLink: 'https://montag-minigame.vercel.app/',
      gitHubLink: 'https://github.com/Patyika1986/Montag-Minigame',
    },
    cleaning: {
      image: 'image/pdfsr.PNG',
      tools: [
        'HTML5',
        ' SCSS',
        ' Angular',
        'Canvas Design'
      ],
      desc: 'Ich habe diese Webseite erstellt damit Sie ein Eindruck sich machen könne wie gut mein Frontend Design Fähigkeiten sind.',
      gallery: [
      ],
      liveLink: 'https://www.pdfsr.de/home',
      gitHubLink: 'https://github.com/Patyika1986/pdfsr',
    },
  };


  async ngOnInit(): Promise<void> {

  }


}
