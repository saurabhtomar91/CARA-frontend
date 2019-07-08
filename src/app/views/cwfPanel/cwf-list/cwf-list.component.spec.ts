import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwfListComponent } from './cwf-list.component';

describe('CwfListComponent', () => {
  let component: CwfListComponent;
  let fixture: ComponentFixture<CwfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
