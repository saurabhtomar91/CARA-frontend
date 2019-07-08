import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AumDailyReportComponent } from './aum-daily-report.component';

describe('AumDailyReportComponent', () => {
  let component: AumDailyReportComponent;
  let fixture: ComponentFixture<AumDailyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumDailyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AumDailyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
