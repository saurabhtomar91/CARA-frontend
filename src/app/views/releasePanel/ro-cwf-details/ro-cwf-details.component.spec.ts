import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoCwfDetailsComponent } from './ro-cwf-details.component';

describe('RoCwfDetailsComponent', () => {
  let component: RoCwfDetailsComponent;
  let fixture: ComponentFixture<RoCwfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoCwfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoCwfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
