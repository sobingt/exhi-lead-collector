import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../models/field.interface";
@Component({
  selector: "app-radiobutton",
  template: `
  <mat-card>
    <mat-card-content>
      <h3>{{field.label}}</h3>
      <div [formGroup]="group">
        <label class="tag" *ngFor="let item of field.optionsArray">
          <input type="checkbox" [formControlName]="item.name" />
          <span>{{ item.label }}</span>
        </label>
      </div>
    </mat-card-content>
  </mat-card>
`,
  styleUrls: ['./radiobutton.component.scss']
})

// <div class="demo-full-width margin-top" [formGroup]="group">
// <label class="radio-label-padding">{{field.label}}:</label>
// <mat-checkbox *ngFor="let item of field.optionsArray" [formControlName]="item.name">{{item.label}}</mat-checkbox>
// </div>




//<mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
// <mat-radio-group [formControlName]="field.name">
// <mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
// </mat-radio-group>
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
