import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrReportComponent } from './wr-report.component';

describe('WrReportComponent', () => {
  let component: WrReportComponent;
  let fixture: ComponentFixture<WrReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
