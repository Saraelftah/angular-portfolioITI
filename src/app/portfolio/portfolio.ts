import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

  protected projects = [
    {
      name: 'Web Design',
      // description: '',
      // link: 'https://'
    },
    {
      name: 'Mobile Design',
      // description: '',
      // link: 'https://'
    },
    {
      name: 'Logo Design',
      // description: '',
      // link: 'https://'
    },
    {
      name: 'Web Application Development',
      // description: '',
      // link: 'https://'
    },
    {
      name: 'Mobile Application Development',
      // description: '',
      // link: ''
    },
    {
      name: 'PWA Development',
      // description: '',
      // link: 'https://'
    },
  ];

}
