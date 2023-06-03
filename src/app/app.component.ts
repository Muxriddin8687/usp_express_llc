import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GoogleAnalyticsService } from './core/google-analytics.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'USP Express LLC';

  constructor(
    public router: Router,
    private _googleAnalytics: GoogleAnalyticsService
  ) {

    if (environment.production) {
      this.router.events.subscribe(this.handleGoogleAnalytics);
    }
  }

  handleGoogleAnalytics = (event: any): void => {
    if (event instanceof NavigationEnd) {
      this._googleAnalytics.sendPageView(event.urlAfterRedirects);
    }
  };
  
}
