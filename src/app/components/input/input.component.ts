import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../models/field.interface";
@Component({
  selector: "app-input",
  template: `<mat-card>
    <mat-card-content>
      <mat-form-field class="example-full-width" [formGroup]="group">
        <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
      </mat-form-field>
    </mat-card-content>
</mat-card>
`,
  styles: []
})

      
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
