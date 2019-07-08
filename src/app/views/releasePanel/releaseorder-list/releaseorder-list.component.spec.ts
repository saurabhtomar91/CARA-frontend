import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseorderListComponent } from './releaseorder-list.component';

describe('ReleaseorderListComponent', () => {
  let component: ReleaseorderListComponent;
  let fixture: ComponentFixture<ReleaseorderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseorderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseorderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
