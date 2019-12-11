import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute, Data, NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'pt-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderComponent implements OnInit {

  data$: Observable<Data>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.data$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    );
  }

}
