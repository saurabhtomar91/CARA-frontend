import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwfReportComponent } from './cwf-report.component';

describe('CwfReportComponent', () => {
  let component: CwfReportComponent;
  let fixture: ComponentFixture<CwfReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwfReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwfReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
