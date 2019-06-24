import { Component, OnInit } from '@angular/core';

export interface Nature {
  name: string;
  slug: string;
  checked: boolean;
}
export interface Industry {
  name: string;
  slug: string;
  checked: boolean;
}
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  industries: Industry[] = [
    {
      name: 'Automobile',
      slug: 'automobile',
      checked: false
    }, {
      name: 'IT',
      slug: 'it',
      checked: false
    }, {
      name: 'HVAC',
      slug: 'hvac',
      checked: false
    },
  ]

  natures: Nature[] = [
    {
      name: 'Product A',
      slug: 'product-a',
      checked: false
    },
    {
      name: 'Product B',
      slug: 'product-c',
      checked: false
    },
    {
      name: 'Product C',
      slug: 'product-c',
      checked: false
    },
    {
      name: 'Partnership',
      slug: 'partnership',
      checked: false
    }
  ]

}
