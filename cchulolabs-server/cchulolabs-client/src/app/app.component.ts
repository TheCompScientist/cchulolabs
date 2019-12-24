import { Component } from '@angular/core';

interface ILink {
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Array<ILink> = [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Blog' },
    { label: 'Projects' },
    { label: 'Resume' }
  ];
}
