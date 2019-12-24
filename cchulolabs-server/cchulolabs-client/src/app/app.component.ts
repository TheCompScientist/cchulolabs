import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ILink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Array<ILink> = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Blog',
      path: '/blog'
    },
    {
      label: 'Projects',
      path: '/projects'
    },
    {
      label: 'Resume',
      path: '/resume'
    }
  ];

  constructor(private router: Router) {}
}
