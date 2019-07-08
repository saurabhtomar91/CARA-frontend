import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisanListComponent } from './kisan-list.component';

describe('KisanListComponent', () => {
  let component: KisanListComponent;
  let fixture: ComponentFixture<KisanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
