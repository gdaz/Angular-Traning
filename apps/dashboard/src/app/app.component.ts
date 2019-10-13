import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', { static: false }) localSideNav;

  title = 'Angular';

  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/customers', icon: 'face', title: 'Customers' },
    { path: '/projects', icon: 'projects', title: 'Projects' }
  ];

  toggleNav() {
    this.localSideNav.toggle();
  }
}
