import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'petshop2';
  currentRoute: string = '';
  
  constructor(private router: Router) {}
  navigateTo(arg0: string) {
    this.currentRoute = arg0;
    this.router.navigate([arg0]);
  }

}
