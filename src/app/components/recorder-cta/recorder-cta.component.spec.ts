import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorderCtaComponent } from './recorder-cta.component';

describe('RecorderCtaComponent', () => {
  let component: RecorderCtaComponent;
  let fixture: ComponentFixture<RecorderCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorderCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorderCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
