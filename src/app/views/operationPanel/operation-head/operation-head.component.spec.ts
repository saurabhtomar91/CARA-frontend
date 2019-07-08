import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationHeadComponent } from './operation-head.component';

describe('OperationHeadComponent', () => {
  let component: OperationHeadComponent;
  let fixture: ComponentFixture<OperationHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
