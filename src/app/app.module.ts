import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
import { BottomNavModule } from 'ngx-bottom-nav';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { WebcamModule } from 'ngx-webcam';

import { DiscussionComponent } from './discussion/discussion.component';
import { InformationComponent } from './information/information.component';
import { ActionComponent } from './action/action.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { RecorderComponent } from './components/recorder/recorder.component';

import { AudioRecordingService } from './services/audio-recording.service';
import { RecorderCtaComponent } from './components/recorder-cta/recorder-cta.component';
import { PhotoCaptureComponent } from './components/photo-capture/photo-capture.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { SelectComponent } from "./components/select/select.component";
import { DateComponent } from "./components/date/date.component";
import { RadiobuttonComponent } from "./components/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { InputButtonComponent } from './components/inputButton/inputButton.component';


const config = {
  apiKey: "AIzaSyCc2kFe10J0CWew1GuI6_U3pl09ITWtEsc",
  authDomain: "exhi-collector.firebaseapp.com",
  databaseURL: "https://exhi-collector.firebaseio.com",
  projectId: "exhi-collector",
  storageBucket: "exhi-collector.appspot.com",
  messagingSenderId: "519227263850",
  appId: "1:519227263850:web:46425724f88215b7"
};
@NgModule({
  declarations: [
    AppComponent,
    DiscussionComponent,
    InformationComponent,
    ActionComponent,
    LoginComponent,
    HomeComponent,
    LeadComponent,
    RecorderComponent,
    RecorderCtaComponent,
    PhotoCaptureComponent,
    InputComponent,
    InputButtonComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    BarRatingModule,
    MatInputModule,
    BottomNavModule,
    WebcamModule,
    // AngularFireModule.initializeApp(config),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AudioRecordingService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    InputButtonComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class AppModule { }
