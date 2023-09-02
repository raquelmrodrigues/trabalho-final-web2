import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho-web2';
  componenteAtivo: string;
  constructor(private router: Router) {
    this.componenteAtivo = ''
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeSegments = event.url.split('/');
        this.componenteAtivo = routeSegments[routeSegments.length - 1];
      }
      console.log(this.componenteAtivo);
    });
  }
}
