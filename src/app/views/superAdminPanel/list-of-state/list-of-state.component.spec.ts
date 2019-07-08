import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfStateComponent } from './list-of-state.component';

describe('ListOfStateComponent', () => {
  let component: ListOfStateComponent;
  let fixture: ComponentFixture<ListOfStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
