import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

export interface Section {
  name: string;
  slug: string;
  updated: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle('Home');
  }

  drafts: Section[] = [
    {
      name: 'Lead 1',
      slug: 'photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Lead 2',
      slug: 'photos',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Lead 3',
      slug: 'photos',
      updated: new Date('1/28/16'),
    }
  ];
  leads: Section[] = [
    {
      name: 'lead 5',
      slug: 'photos',
      updated: new Date('2/20/16'),
    },
    {
      name: 'lead 7',
      slug: 'photos',
      updated: new Date('1/18/16'),
    }
  ];
}
