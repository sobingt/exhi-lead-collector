import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

//import { filter, map } from 'rxjs/operators'; 
import { filter, map, mergeMap } from 'rxjs/operators';

import { HeaderService } from './services/header.service';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private todoService: TodoService,
    private headerService: HeaderService
  ) { }
  title = 'Home';
  getOptions() {
    this.todoService.getOptions().subscribe(
      data => {
        //this.regConfigData = data['options']
      },
      err => console.error(err),
      () => console.log('done loading options')
    );
  }
  
  ngOnInit() {
    this.headerService.title.subscribe(title => {
      this.title = title;
    });

    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .pipe(map(() => this.activatedRoute))
    .pipe(map((route) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    }))
    .pipe(filter((route) => route.outlet === 'primary'))
    .pipe(mergeMap((route) => route.data))
    .subscribe((event) => this.titleService.setTitle(event['title']));
  }

}
