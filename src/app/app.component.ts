import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>`,
  styles: [`
  .nav.navbar-nav { font-size: 15px };
  #searchForm { margin-right: 100px; }
  @media (max-width:1200px) { #searchForm { display:none }}`]
})
export class AppComponent {
  title = 'app';
}
