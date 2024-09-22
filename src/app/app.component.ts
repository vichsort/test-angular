import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppFooter } from './components/footer/app.footer';
import { AppNav } from './components/nav/app.nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppFooter,
    AppNav
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'World'
}
