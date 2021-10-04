import { Component, OnInit, HostListener, DoCheck } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsModel } from './models/analytics.model';
declare let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public identity: any;
  public currentRoute: string;

  public analytics: AnalyticsModel;
  isShow: boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
   } else {
    this.isShow = false;
   }
  }

  constructor( public router: Router) {
                      // Analytics
                      const navEndEvents$ = this.router.events
                      .pipe(
                        filter(event => event instanceof NavigationEnd)
                      );

                      navEndEvents$.subscribe((event: NavigationEnd) => {
                        this.currentRoute = event.url;
                        gtag('config', '', {
                          page_path: event.urlAfterRedirects
                        });
                      });
               }

    ngOnInit() {
    }

    gotoTop() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
    }

}

