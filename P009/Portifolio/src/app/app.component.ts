import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
currentRoute: string = '';
  constructor(private router: Router) {}
  navigateTo(arg0: string) {
    this.currentRoute = arg0;
    this.router.navigate([arg0]);
  }
  title = 'minhaApp';
} 