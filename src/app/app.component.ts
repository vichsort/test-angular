import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppNav } from './components/nav/app.nav';
import { AppBanner } from './components/banner/app.banner';
import { AppCards } from './components/cards/app.cards';
import { AppFooter } from './components/footer/app.footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNav,
    AppBanner,
    AppCards,
    AppFooter
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
