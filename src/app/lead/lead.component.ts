import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";
import { FieldConfig } from "../models/field.interface";
import { DynamicFormComponent } from "../components/dynamic-form/dynamic-form.component";

import { Todo } from '../models/todo';
import { InputData } from '../models/input-data';
import { optionDiscussionData, optionActionData, optionInfoData } from '../models/option';

import { HeaderService } from '../services/header.service';
import { GoogleDriveService } from '../services/google-drive.service';
import { OnlineOfflineService } from '../services/online-offline.service';
import { TodoService } from '../services/todo.service';

import { of } from 'rxjs';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {

  options: any;
  constructor(
    private readonly todoService: TodoService,
    public readonly onlineOfflineService: OnlineOfflineService,
    private headerService: HeaderService, 
  ) {
  }

  ngOnInit() {
    this.headerService.setTitle('New Lead');
    this.getOptions();
  }

  @ViewChild(DynamicFormComponent) formInfo: DynamicFormComponent;
  @ViewChild(DynamicFormComponent) formDiscussion: DynamicFormComponent;
  @ViewChild(DynamicFormComponent) formAction: DynamicFormComponent;
  regConfig: FieldConfig[] = optionInfoData.options;
  regConfigDiscussion: FieldConfig[] = optionDiscussionData.options;
  regConfigAction: FieldConfig[] = optionActionData.options;
  regConfigData: FieldConfig[] = [];
  
  submit(value: any) { }
  getOptions() {
    this.todoService.getOptions().subscribe(
      data => { 
        this.regConfigData = data['options']
      },
        err => console.error(err),
        () => console.log('done loading options')
      );
  }

  scroll(el: HTMLElement) {
    console.log(el)
    el.scrollIntoView();
  }
}
