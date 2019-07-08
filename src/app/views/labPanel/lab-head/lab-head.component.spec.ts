import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabHeadComponent } from './lab-head.component';

describe('LabHeadComponent', () => {
  let component: LabHeadComponent;
  let fixture: ComponentFixture<LabHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
