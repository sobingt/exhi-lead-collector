import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../models/field.interface";
@Component({
  selector: "app-inputButton",
  template: `<mat-card>
    <mat-card-content>
      <mat-form-field class="example-full-width" [formGroup]="group">
        <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
      </mat-form-field>
        <button mat-raised-button >Take a Photo</button>
    </mat-card-content>
</mat-card>
`,
  styles: []
})


export class InputButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
