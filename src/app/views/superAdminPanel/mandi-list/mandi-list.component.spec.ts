import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiListComponent } from './mandi-list.component';

describe('MandiListComponent', () => {
  let component: MandiListComponent;
  let fixture: ComponentFixture<MandiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
